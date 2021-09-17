import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import Page from '@/components/Page/Page'
import confirm from '@/utils/confirm'
import alert from '@/utils/alert'
import confirmForm from '@/utils/confirmForm'
import SlotAPI from '@/API/slot'
import OttApi from '@/API/ott'
import QueueInputGroup from '@/components/QueueInputGroup/QueueInputGroup'
import getDateStyles from '@/components/SlotCalendar/dateStyling'
import { earliestAvailableInMonth, tillMonthEnd, toDatetime, fromDatetime } from '@/utils/dateLib'
import getDailySlots from '@/components/QueueInputGroup/slotsMatrix'
import FacultySelector from '@/components/FacultySelector/FacultySelector'
import facultyToQueue from '@/utils/facultyToQueue'
import FasttrackForm from '@/forms/Fasttrack'

export default function Queue() {
    const [slots, setSlots] = useState([])
    const [faculty, setFaculty] = useState(0)

    useEffect(() => {
        async function fetchAPI() {
            const response = await SlotAPI.getAll(
                facultyToQueue(faculty),
                earliestAvailableInMonth(new Date().getFullYear(), new Date().getMonth()),
                tillMonthEnd(new Date()) + 1
            )
            if (response) {
                setSlots(response.data)
            }
        }
        if (faculty !== 0) {
            fetchAPI()
        }
    }, [faculty])

    async function onSlotClick(slot) {
        if (
            await confirm(
                `Записаться в очередь на ${slot.value
                    .split('T')[1]
                    .split(':')
                    .slice(0, 2)
                    .join(':')}?`,
                {
                    title: 'Подтверждение',
                }
            )
        ) {
            const values = await confirmForm(FasttrackForm, {
                title: 'Оставьте информацию о себе',
                cancelLabel: 'Отменить',
            })
            if (values) {
                if (values.course !== 1 && fromDatetime(slot.value) < new Date('2021-09-13')) {
                    alert('До 13 сентября запись доступна только для студентов первого курса.', {
                        title: 'Ошибка :(',
                    })
                    return
                }
                if (
                    await SlotAPI.reserve(
                        facultyToQueue(faculty),
                        parseInt(slot.id, 10),
                        OttApi.getToken({ ...values, faculty_id: faculty })
                    )
                ) {
                    alert(
                        <>
                            Вы успешно записались на заселение. Копия талона отправлена вам на
                            почту.
                            <br />
                            <br />
                            Обратите внимание, что в случае ошибки или изменения планов вы сможете
                            отменить запись, нажав на специальную ссылку в письме. Не забудьте
                            проверить папку &quot;Спам&quot;!
                        </>,
                        {
                            title: 'Отлично!',
                        }
                    )
                }
            }
        }
    }

    // Огромное преимущество от нахождения этих элементов здесь - они не вычисляются при смене
    // дат календаря и т.д
    const { slotMatrix, uniqueDates } = getDailySlots(slots)
    const { dailyClasses, disabledDates } = getDateStyles(slotMatrix, uniqueDates)

    // Текст, отображаемый на месте пустых слотов
    function noItemsText(date) {
        if (!(date.getDay() % 6)) {
            return 'На выходные нет записи'
        }
        if (slotMatrix[toDatetime(date)]?.length > 0) {
            return 'В этот день больше нет свободных мест'
        }
        return 'У нас еще нет информации о записи на этот день'
    }

    return (
        <Page header="Электронная регистрация на процедуру заселения">
            <Alert variant="warning">
                Внимание! До 13 сентября запись доступна только для студентов первого курса.
            </Alert>
            <Alert variant="info">
                Запись в электронную очередь - это не время, в которое вас будут пускать в
                общежитие. В общежитие можно приехать в любое время и в любой день, вас поселят.
                Электронная очередь нужна для оплаты проживания. Оплату можно будет произвести через
                какое-то время после приезда и поселения в комнату.
            </Alert>
            <Row>
                <Col xs={12} sm={6} lg={4} xl={3}>
                    <FacultySelector
                        className="mb-3"
                        onSelect={(value) => {
                            setFaculty(value)
                        }}
                        value={faculty}
                    />
                </Col>
                <Col xs={6} />
            </Row>
            <QueueInputGroup
                show={faculty !== 0}
                slots={slots}
                slotMatrix={slotMatrix}
                uniqueDates={uniqueDates}
                dailyClasses={dailyClasses}
                disabledDates={disabledDates}
                onSlotClick={onSlotClick}
                getNoItemsText={noItemsText}
            />
        </Page>
    )
}

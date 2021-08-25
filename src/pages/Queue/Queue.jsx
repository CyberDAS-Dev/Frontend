import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import Page from '@/components/Page/Page'
import confirm from '@/utils/confirm'
import alert from '@/utils/alert'
import SlotAPI from '@/API/slot'
import QueueInputGroup from '@/components/QueueInputGroup/QueueInputGroup'
import getDateStyles from '@/components/SlotCalendar/dateStyling'
import { earliestAvailableInMonth, tillMonthEnd, toDatetime } from '@/utils/dateLib'
import getDailySlots from '@/components/QueueInputGroup/slotsMatrix'
import FacultySelector from '@/components/FacultySelector/FacultySelector'
import facultyToQueue from '@/utils/facultyToQueue'

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
        fetchAPI()
    }, [faculty])

    async function onSlotClick(slot) {
        if (
            (await confirm(`Забронировать слот на ${slot.value}?`, { title: 'Подтверждение' })) &&
            (await SlotAPI.reserve('living_1', slot.id))
        ) {
            alert('Вы успешно записались на заселение. Копия талона отправлена вам на почту.', {
                title: 'Отлично!',
            })
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
            <Alert variant="info">
                Пожалуйста, перед использованием сервиса ознакомьтесь с{' '}
                <Link to="/queue">инструкцией.</Link> <br />В случае возникновения проблем,
                воспользуйтесь формой обратной связи.
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

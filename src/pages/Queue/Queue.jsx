import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { differenceInCalendarDays } from 'date-fns'
import Alert from 'react-bootstrap/Alert'
import MonthSelector from '@/components/Calendar/MonthSelector'
import SlotCalendar from '@/components/Calendar/SlotCalendar'
import SlotList from '@/components/SlotList/SlotList'
import confirm from '@/utils/confirm'
import alert from '@/utils/alert'
import QueueAPI from '@/API/queue'
import SlotAPI from '@/API/slot'
import s from './Queue.module.scss'

const queueService = new QueueAPI()
const slotService = new SlotAPI('living')
const isSameDay = (a, b) => differenceInCalendarDays(a, b) === 0

export default function Queue() {
    const [value, setValue] = useState(new Date())
    const [duration, setDuration] = useState(0)
    const [slots, setSlots] = useState([])
    const [month, setMonth] = useState(new Date().getMonth())

    useEffect(() => {
        queueService.get('living').then((res) => {
            setDuration(res.data.duration)
        })
        slotService.getAll().then((res) => {
            setSlots(res.data)
        })
    }, [])

    const extractDaySlots = (day) => slots.filter((slot) => isSameDay(new Date(slot.time), day))
    const dropOldSlots = (array) =>
        array.filter((slot) => new Date(slot.time).getTime() - new Date().getTime() > 0)

    const onDateChange = (nextValue) => setValue(nextValue)
    // Сбиваем текущую дату при смене месяца, что бы справа не маячил список слотов
    const onMonthChange = (nextValue) => setMonth(nextValue) || setValue(0)

    async function onSlotClick(slot) {
        if (await confirm(`Забронировать слот на ${slot.value}?`, { title: 'Подтверждение' })) {
            try {
                await slotService.reserve(slot.id)
            } catch (err) {
                alert(`Произошла ошибка ${err}`)
                return
            }
            alert('Вы успешно записались на заселение. Копия талона отправлена вам на почту.', {
                title: 'Отлично!',
            })
        }
    }
    return (
        <div className={s.background}>
            <Container>
                <Container fluid className={s.page}>
                    <div className={s.pageHeader}>
                        <h5 className={s.header}>Электронная регистрация на процедуру заселения</h5>
                    </div>
                    <Alert className={s.instruction} variant="info">
                        Пожалуйста, перед использованием сервиса ознакомьтесь с{' '}
                        <Link to="/queue">инструкцией.</Link> <br />В случае возникновения проблем,
                        воспользуйтесь формой обратной связи.
                    </Alert>
                    <MonthSelector
                        className={s.months}
                        value={month}
                        onChange={onMonthChange}
                        slots={slots}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <SlotCalendar
                            onChange={onDateChange}
                            value={value}
                            monthValue={month}
                            slots={dropOldSlots(slots)}
                            disabledDates={[]}
                        />
                        <SlotList
                            slots={dropOldSlots(extractDaySlots(value))}
                            duration={duration}
                            onClick={onSlotClick}
                        />
                    </div>
                </Container>
            </Container>
        </div>
    )
}

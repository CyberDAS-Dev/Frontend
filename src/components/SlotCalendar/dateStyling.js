import { toDatetime } from '@/utils/dateLib'
import { getDayClass, isDayDisabled } from './SlotCalendar'

export default function getDateStyles(slots) {
    const today = toDatetime(new Date())
    // Почему не просто `map` в `new Date`? нам нужно отфильтровать именно по дням
    // А еще JS не умеет сравнивать Date, поэтому лучше сравнивать строки (т.е не применять parseISO и подобные)
    const slotDates = slots.map((slot) => toDatetime(new Date(slot.time)))
    const uniqueDates = [...new Set(slotDates)]

    // Формируем матрицу из дней и слотов
    const dailySlots = {}
    for (let i = 0; i < uniqueDates.length; i += 1) {
        dailySlots[uniqueDates[i]] = new Array(0)
    }
    slots.forEach((element, index) => {
        dailySlots[slotDates[index]].push(element)
    })

    const dailyClasses = Object.fromEntries(
        Object.entries(dailySlots).map((element) => [element[0], getDayClass(element[1])])
    )
    const disabledDates = uniqueDates.filter((element) => isDayDisabled(element, today, dailySlots))
    return { dailyClasses, disabledDates }
}

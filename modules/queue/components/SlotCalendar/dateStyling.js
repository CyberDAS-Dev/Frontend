import { toDatetime } from '@/common/utils/dateLib'
import { getDayClass, isDayDisabled } from './SlotCalendar'

export default function getDateStyles(dailySlots, uniqueDates) {
    const today = toDatetime(new Date())

    const dailyClasses = Object.fromEntries(
        Object.entries(dailySlots).map((element) => [element[0], getDayClass(element[1])])
    )
    const disabledDates = uniqueDates.filter((element) => isDayDisabled(element, today, dailySlots))
    return { dailyClasses, disabledDates }
}

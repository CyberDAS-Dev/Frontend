import { toDatetime } from '@/utils/dateLib'

// Формирует матрицу из дней и слотов, приходящихся на этот день
// Попутно возвращает список уникальных дат
export default function getSlotsMatrix(slots) {
    // Почему не просто `map` в `new Date`? нам нужно отфильтровать именно по дням
    // А еще JS не умеет сравнивать Date, поэтому лучше сравнивать строки (т.е не применять parseISO и подобные)
    const slotDates = slots.map((slot) => toDatetime(new Date(slot.time)))
    const uniqueDates = [...new Set(slotDates)]

    // Формируем матрицу
    const slotMatrix = {}
    for (let i = 0; i < uniqueDates.length; i += 1) {
        slotMatrix[uniqueDates[i]] = new Array(0)
    }
    slots.forEach((element, index) => {
        slotMatrix[slotDates[index]].push(element)
    })

    return { slotMatrix, uniqueDates }
}

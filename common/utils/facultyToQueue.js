export default function facultyToQueue(value) {
    switch (value) {
        case 1: // Биологический
        case 16: // Философский
        case 13: // Психологчиеский
        case 14: // Фундаментальной медицины
        case 6: // Исторический
        case 10: // Космических исследований
            return 'living_1'
        case 18: // Экономический
        case 3: // Географический
        case 4: // ИСАА
        case 7: // ФББ
            return 'living_2'
        case 8: // Журналистики
        case 12: // Почвоведения
        case 11: // Политологии
        case 15: // ФФФХИ
        case 2: // ВШССН
            return 'living_3'
        default:
            return 'living_1'
    }
}

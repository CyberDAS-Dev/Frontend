Компонент, используемый для системы очередей. Представляет собой список слотов.

Всё, что вам нужно о нем знать:

- Оборачивает массив `<Slot>`'ов в `<Row>`
- Манипулирует размером кнопок; на экранах выше 768 пикселей (`md`) делает их большими
- Убирает занятые слоты из входных данных
- Сортирует слоты по времени
- Умеет вмещать разное число колонок с помощью параметров `xs`, `sm`, `md` и т.д

Также, есть вариант **NamedSlotList**. Он имеет надпись сверху, а также умеет выводить 
произвольный текст в случае отсутствия слотов. 
Компонент, базирующйися на **ContentBox** и используемый для диалоговых окон - **Modal**.

Всё, что вам нужно о нем знать:

- Собран из **Bootstrap/Modal** и **ContentBox** 
- В плане визуала: тот же **ContentBox** плюс футер с двумя кнопками
- Можно убрать кнопку отмены (для реализации алертов)
- Можно убрать обе кнопки и переписать футер
- Переписанный футер автоматически оборачивается в `<Row>`
- Компонент унаследовал почти все пропсы от обоих родителей
- Контролируемый: принимает коллбэк `proceed`, возвращающий результат, и пропс `show`
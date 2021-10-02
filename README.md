<br />
<p align="center">
  <a href="https://github.com/CyberDAS-Dev/API">
    <img src=".github/logo.png" alt="Logo" width="250" height="78">
  </a>

  <h3 align="center">CyberDAS Frontend</h3>
  <p align="center">
    Сайт общежития ДАС МГУ, работающий на базе <a href="https://github.com/CyberDAS-Dev/API">CyberDAS API</a>
    <br />
    <a href="https://cyberdas.net/storybook"><strong>Сторибук »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CyberDAS-Dev/Frontend/issues">Сообщить об ошибке</a>
    ·
    <a href="https://github.com/CyberDAS-Dev/Frontend/issues">Предложить улучшение</a>
  </p>
</p>

<br>
<details open="open">
  <summary>Содержание</summary>
  <ol>
    <li><a href="#о-проекте">О проекте</a></li>
    <li>
      <a href="#приступаем-к-работе">Приступаем к работе</a>
      <ul>
        <li><a href="#необходимое-по">Необходимое ПО</a></li>
        <li><a href="#установка">Установка</a></li>
        <li><a href="#развертывание">Развертывание</a></li>
      </ul>
    </li>
    <li><a href="#дорожная-карта">Дорожная карта</a></li>
    <li><a href="#содействие">Содействие</a></li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#контакты">Контакты</a></li>
    <li><a href="#благодарности">Благодарности</a></li>
  </ol>
</details>
<br>

<div align="center">
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=" alt="React">
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=" alt="Next">
  </a>
  <a href="https://sass-lang.com/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Sass&color=CC6699&logo=Sass&logoColor=FFFFFF&label=" alt="Sass">
  </a>
</div>

<br>
<hr>
<br>

<div align="center">
    <img src="https://i.imgur.com/0Uwx2vP.png" width="723"></img>
</div>
<br>

## О проекте

Вы когда-нибудь стояли в очереди на заселение по несколько часов? Жили пару дней без света в коридоре, потому что не хотелось подниматься к коменданту? Тогда вам знакомо, как неприветлива бывает бюрократия.

Этот проект призван упростить жизнь студентов в общежитии, избавив от их бюрократических рутин и дав им новые, цифровые, возможности.

Мы хотим дать студентам возможность:

-   Оставлять заявки на вызов технических служб не выходя из комнаты
-   Дистанционно записываться на заселение и не тратить свою жизнь в очереди
-   Составлять и отправлять заявления в администрацию без особых усилий
-   Делиться ненужными вещами без пабликов-барахолок в ВК
-   И многое другое...

Проект создается для [общежития ДАС МГУ](https://das.msk.ru), работает на базе [API](https://github.com/CyberDAS-Dev/API).

Если ты тоже хочешь помочь и умеешь в дизайн или код, то пиши <a href="#контакты">нам</a>!

## Приступаем к работе

Следуй этим шагам, чтобы локально запустить текующую версию проекта.

### Необходимое ПО

-   Node.js (>=12, оптимально 14)

### Установка

1. Скопируйте репозиторий
    ```bash
    git clone https://github.com/CyberDAS-Dev/Frontend.git
    ```
2. Установите зависимости проекта.
    ```bash
    npm i
    ```
3. Запустите локальный сервер для разработки, приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)
    ```bash
    npm run dev
    ```

### Тестирование

1.  Модульное тестирование компонентов запускается с помощью Jest и использует библиотеку react-testing-library. Для запуска тестов выполните:
    ```bash
    npm test
    ```
2.  Проверка JS кода работает на базе eslint, совмещенным с инструментом форматирования prettier, использование данных инструментов позволяет содержать код проекта в однородном виде, также исключая часть глупых ошибок.
    1.  Для проверки с помощью терминала запустите:
        ```bash
        npm run lint:code
        ```
    2.  Для автоматического форматирования и исправления ошибок выполните:
        ```bash
        npm run format:code
        ```
    3.  Для корректной работы линтинга и форматирования в IDE (рекомендую использовать VS Code) требуется установить расширение eslint в ваш редактор кода. Для автоматического форматирования кода при сохранении файла добавьте данные строки в настройки (settings.json) VSCode:
        ```json
        "files.autoSave": "onFocusChange",
        "editor.formatOnSave": true,
        "eslint.format.enable": true,
        "[javascriptreact]": {
            "editor.defaultFormatter": "dbaeumer.vscode-eslint"
        },
        "[javascript]": {
            "editor.defaultFormatter": "dbaeumer.vscode-eslint"
        },
        ```
3.  Проверка стилевых файлов работает с помощью stylelint, совмещен вместе с prettier для форматирования.
    1.  Для проверки с помощью терминала запустите:
        ```bash
        npm run lint:style
        ```
    2.  Для автоматического форматирования и исправления ошибок выполните:
        ```bash
        npm run format:style
        ```
    3.  Для корректной работы линтинга и форматирования в IDE (рекомендую использовать VS Code) требуется установить расширение stylelint и prettier в ваш редактор кода. Для автоматического форматирования cтилей при сохранении файла добавьте данные строки в настройки (settings.json) VSCode:
        ```json
        "files.autoSave": "onFocusChange",
        "editor.formatOnSave": true,
        "eslint.format.enable": true,
        "[scss]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        ```

### Развертывание

1. Запустите сборку оптимизированной версии приложения, после которой по умолчанию сервер будет запущен на 3000 порту [http://localhost:3000](http://localhost:3000)
    ```bash
    npm start
    ```

## Дорожная карта

Смотрите [milestones](https://github.com/CyberDAS-Dev/Frontend/milestones) для информации о планируемых релизах и долгосрочных планов.

## Содействие

Совместная разработка это то, что делает опен-сорс сообщество таким удивительным местом для обучения и творчества. Мы **ценим** любой ваш вклад в проект.

1. Сделайте копию (Fork) проекта
2. Создайте свою ветку для работы (`git checkout -b feature/AmazingFeature`)
3. Сохраните изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте их в удаленную ветку (`git push origin feature/AmazingFeature`)
5. Создайте Pull Request

## Лицензия

Распространяется под лицензией MIT. Смотрите `LICENSE` для дополнительной информации.

## Контакты

marcusymka@gmail.com
<br>
[telegram](https://t.me/foxxxxxxxxxxxxxxxxxxxxxxxxxxx)

Ссылка на проект: [https://github.com/CyberDAS-Dev/API](https://github.com/CyberDAS-Dev/API)

## Благодарности

-   [Александр Букреев](https://github.com/TarLung), оригинальный создатель проекта
-   [Студенческий комитет ДАС МГУ](https://vk.com/studcomdas)
-   [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

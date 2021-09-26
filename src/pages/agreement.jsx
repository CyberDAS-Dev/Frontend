import React from 'react'
import Head from 'next/head'
import Page from '@/common/components/Page/Page'

export default function UserAgreement() {
    return (
        <>
            <Head>
                <title>Соглашение</title>
                <meta property="og:title" content="Соглашение" key="title" />
                <meta name="description" content="Пользовательское соглашение CyberDAS." />
                <meta
                    property="og:description"
                    content="Пользовательское соглашение CyberDAS."
                    key="description"
                />
            </Head>
            <Page header={<h2>Пользовательское Соглашение</h2>}>
                <p>
                    Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения
                    между владельцем <a href="https://cyberdas.net">https://cyberdas.net</a> (далее
                    CyberDAS или Администрация) с одной стороны и пользователем сайта с другой.
                </p>
                <p>Используя сайт, Вы соглашаетесь с условиями данного соглашения.</p>
                <p>
                    <strong>
                        Если Вы не согласны с условиями данного соглашения, не используйте сайт
                        CyberDAS!
                    </strong>
                </p>
                <div className="mb-5 mt-4">
                    <h3 className="mb-3">Права и обязанности сторон</h3>
                    <div className="ms-4">
                        <h4>Пользователь имеет право:</h4>
                        <ul>
                            <li>осуществлять поиск информации на сайте</li>
                            <li>получать информацию на сайте</li>
                            <li>распространять информацию на сайте</li>
                            <li>использовать информацию сайта в личных некоммерческих целях</li>
                        </ul>
                        <h4>Администрация имеет право:</h4>
                        <ul>
                            <li>
                                по своему усмотрению и необходимости создавать, изменять, отменять
                                правила
                            </li>
                            <li>ограничивать доступ к любой информации на сайте</li>
                            <li>создавать, изменять, удалять информацию</li>
                            <li>
                                удалять учетные записи, нарушившие условия пользовательского
                                соглашения
                            </li>
                        </ul>
                        <h4>Пользователь обязуется:</h4>
                        <ul>
                            <li>обеспечить достоверность предоставляемой информации</li>
                            <li>
                                обновлять Персональные данные, предоставленные при регистрации, в
                                случае их изменения
                            </li>
                            <li>не нарушать работоспособность сайта</li>
                            <li>
                                не создавать несколько учётных записей на Сайте, если фактически они
                                принадлежат одному и тому же лицу
                            </li>
                            <li>
                                не совершать действия, направленные на введение других Пользователей
                                в заблуждение
                            </li>
                            <li>
                                не передавать в пользование свою учетную запись и/или логин и пароль
                                своей учетной записи третьим лицам
                            </li>
                            <li>
                                не регистрировать учетную запись от имени или вместо другого лица
                            </li>
                        </ul>
                        <h4>Администрация обязуется:</h4>
                        <ul>
                            <li>
                                поддерживать работоспособность сайта за исключением случаев, когда
                                это невозможно по независящим от Администрации причинам.
                            </li>
                            <li>
                                осуществлять разностороннюю защиту учетной записи и личных данных
                                Пользователя
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-5 mt-4">
                    <h3>Ответственность сторон</h3>
                    <ul>
                        <li>
                            администрация не несет никакой ответственности за достоверность
                            информации, скопированной из других источников
                        </li>
                        <li>
                            администрация не несёт ответственность за несовпадение ожидаемых
                            Пользователем и реально полученных услуг
                        </li>
                        <li>
                            администрация не несет никакой ответственности за услуги,
                            предоставляемые третьими лицами
                        </li>
                    </ul>
                </div>
                <div className="mb-5 mt-4">
                    <h3>Условия действия Соглашения:</h3>
                    <ul>
                        <li>
                            Данное Соглашение вступает в силу при любом использовании данного сайта.
                        </li>
                        <li>Соглашение перестает действовать при появлении его новой версии.</li>
                        <li>
                            Администрация оставляет за собой право в одностороннем порядке изменять
                            данное соглашение по своему усмотрению.
                        </li>
                        <li>
                            При любом изменении данного соглашения, администрация будет оповещать
                            пользователей удобным для нее способом.
                        </li>
                    </ul>
                </div>
            </Page>
        </>
    )
}

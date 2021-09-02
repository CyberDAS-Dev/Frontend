import React from 'react'
import alert from '@/utils/alert'

export const errorAlert = (text) => alert(text, { title: 'Ошибка :(' })
export const supportEmail = <a href="mailto:support@cyberdas.net">support@cyberdas.net</a>
export const mayBeError = (
    <span>Если вы считаете, что это ошибка, то сообщите на {supportEmail}</span>
)

// Глобальный обработчик ошибок
export default function errorComposer(error) {
    return () => {
        const statusCode = error.response?.status
        if (statusCode === 404) {
            error.alert(<div>Этого ресурса не существовало или он был удален. {mayBeError}</div>)
        } else if (statusCode === 403) {
            error.alert(
                <div>
                    У вашего аккаунта недостаточно прав для доступа к этому ресурсу. {mayBeError}{' '}
                </div>
            )
        } else if (statusCode === 401) {
            error.alert(
                <div>
                    Чтобы попасть на эту страницу вам нужно войти в свой аккаунт. {mayBeError}
                </div>
            )
        } else if (statusCode >= 500) {
            error.alert(
                <div>
                    Что-то не так с сервером! Ошибка номер {statusCode}
                    <br /> Возможно, вы узнали об этом первее нас. Если вам не трудно, опишите
                    проблему в письме на {supportEmail}
                </div>
            )
        } else {
            error.alert(
                <div>
                    Произошла непредвиденная ошибка, номер {statusCode}. Если вам не трудно, опишите
                    проблему в письме на {supportEmail}
                </div>
            )
        }
    }
}

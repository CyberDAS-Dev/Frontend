import confirm from '@/utils/confirm'
import alert from '@/utils/alert'
import BackendProxyAPI from '@/API/proxy'

async function onCancel(token, backendUrl) {
    if (
        await confirm(`Вы уверены, что хотите отменить запись?`, {
            title: 'Подтверждение',
        })
    ) {
        if (
            await BackendProxyAPI.get(token, backendUrl).catch((err) => {
                const statusCode = err.response?.status
                if (statusCode === 404) {
                    err.alert('Слот на это время и так свободен, нет необходимости его освобождать')
                } else if (statusCode === 403) {
                    err.alert(
                        'Запись на это время уже истекла. Нет необходимости её освобождать, вы можете заново зарегистрироваться на любое другое удобное время'
                    )
                } else {
                    err.handleGlobally()
                }
            })
        ) {
            alert('Вы успешно отменили запись', { title: 'Успех!' })
        }
    }
}

export default function ghostRouting({ pathname }, query, history) {
    const token = query.get('token')
    const backendUrl = query.get('backend')

    switch (pathname) {
        case '/cancel':
            onCancel(token, backendUrl)
            history.push('/')
            break

        default:
            break
    }
}

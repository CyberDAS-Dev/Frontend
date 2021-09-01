import confirm from '@/utils/confirm'
import alert from '@/utils/alert'
import QueryHandleAPI from '@/API/queryHandle'

async function onCancel(token, backendUrl) {
    if (
        await confirm(`Вы уверены, что хотите отменить запись?`, {
            title: 'Подтверждение',
        })
    ) {
        if (await QueryHandleAPI.post(token, backendUrl)) {
            alert('Вы успешно отменили запись', { title: 'Успех!' })
        }
    }
}

export default function queryRouting({ pathname }, query, history) {
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

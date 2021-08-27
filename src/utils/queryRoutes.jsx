import confirm from '@/utils/confirm'
import alert from '@/utils/alert'
import SlotAPI from '@/API/slot'

async function onCancel(query) {
    if (
        await confirm(`Вы уверены, что хотите отменить запись?`, {
            title: 'Подтверждение',
        })
    ) {
        if (await SlotAPI.undo(query)) {
            alert('Вы успешно отменили запись', { title: 'Успех!' })
        }
    }
}

export default function externalRoutes(query, history) {
    if (query.has('cancel')) {
        onCancel(query.get('cancel'))
        history.push('/')
    }
}

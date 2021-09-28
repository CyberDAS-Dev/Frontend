import React from 'react'
import { useRouter } from 'next/router'
import Landing from '@/modules/landing'

import confirm from '@/common/utils/confirm'
import alert from '@/common/utils/alert'
import BackendProxyAPI from '@/common/api/proxy'

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

export default function Cancel() {
    const router = useRouter()

    React.useEffect(() => {
        const { token, backend } = router.query
        if (token && backend) {
            onCancel(token, backend)
        }
        router.push('/')
    }, [router])

    return <Landing />
}

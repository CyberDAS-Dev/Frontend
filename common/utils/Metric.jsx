import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import ym, { YMInitializer } from 'react-yandex-metrika'

export default function Metric() {
    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeComplete', (url) => {
            ym('hit', url)
        })
    }, [router.events])

    return (
        <YMInitializer
            accounts={[`${process.env.NEXT_PUBLIC_YM_ID}`]}
            options={{ webvisor: true, defer: true }}
            version="2"
        />
    )
}

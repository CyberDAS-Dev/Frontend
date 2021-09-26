import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import ym, { YMInitializer } from 'react-yandex-metrika'
import ReactGA from 'react-ga'

export default function Metric() {
    const router = useRouter()

    useEffect(() => {
        ReactGA.initialize(`${process.env.NEXT_PUBLIC_GA_ID}`)
    }, [])

    useEffect(() => {
        router.events.on('routeChangeComplete', (url) => {
            ym('hit', url)
            ReactGA.pageview(url)
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

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ym, { YMInitializer } from 'react-yandex-metrika'
import ReactGA from 'react-ga'

export default function Metric() {
    const { pathname } = useLocation()

    useEffect(() => {
        ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`)
    }, [])

    useEffect(() => {
        ym('hit', pathname, {})
        ReactGA.pageview(pathname)
    }, [pathname])

    return (
        <YMInitializer
            accounts={[`${process.env.REACT_APP_YM_ID}`]}
            options={{ webvisor: true, defer: true }}
            version="2"
        />
    )
}

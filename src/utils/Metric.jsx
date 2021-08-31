import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ym, { YMInitializer } from 'react-yandex-metrika'

export default function Metric() {
    const { pathname } = useLocation()

    useEffect(() => {
        ym('hit', pathname, {})
    }, [pathname])

    return (
        <YMInitializer
            accounts={[`${process.env.REACT_APP_YM_ID}`]}
            options={{ webvisor: true, defer: true }}
            version="2"
        />
    )
}

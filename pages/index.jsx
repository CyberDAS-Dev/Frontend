import React from 'react'
import Head from 'next/head'
import Landing from '@/modules/landing'

export default function Homepage() {
    return (
        <>
            <Head>
                <title>Главная - CyberDAS</title>
                <meta property="og:title" content="Главная - CyberDAS" key="title" />
            </Head>
            <Landing />
        </>
    )
}

import React from 'react'
import Head from 'next/head'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/900.css'
import '@fontsource/quantico'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@/styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>CyberDAS</title>
            <meta name="description" content="Сайт общежития ДАС МГУ." />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
)

export default MyApp

import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'

import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'
import Metric from '@/common/utils/Metric'

import store from '@/common/store/store'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/quantico'
import '@/common/styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
    const isProduction = process.env.NODE_ENV === 'production'

    return (
        <>
            <Head>
                <title>CyberDAS</title>
                <meta property="og:title" content="CyberDAS" key="title" />
                <meta
                    name="description"
                    content="CyberDAS - проект по цифровизации общежития ДАС МГУ. Призван избавить студентов от проблем с очередями и упростить лишние процессы бюрократии."
                />
                <meta
                    property="og:description"
                    content="CyberDAS - проект по цифровизации общежития ДАС МГУ. Призван избавить студентов от проблем с очередями и упростить лишние процессы бюрократии."
                    key="description"
                />
                <meta property="og:site_name" content="CyberDAS" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>
            {isProduction ? <Metric /> : null}
            <Provider store={store}>
                <Header />
                <div id="__content">
                <Component {...pageProps} />
                </div>
                <Footer />
            </Provider>
        </>
    )
}

export default MyApp

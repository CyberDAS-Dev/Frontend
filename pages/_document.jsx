// https://github.com/vercel/next.js/issues/28596
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="index, follow" />
                    <meta key="googlebot" name="googlebot" content="index,follow" />
                    <meta name="google" content="notranslate" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

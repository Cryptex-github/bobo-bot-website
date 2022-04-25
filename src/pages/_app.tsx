import React from 'react';
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import { APIClientContext, DefaultAPIClient } from '../Api';

import Header from '../components/Header';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Mulish', sans-serif;
        color: #FFFFFF;
    }

    body {
        background-color: #02101b;
        margin: 0;
    }
`


export default function App({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <APIClientContext.Provider value={DefaultAPIClient}>
                <Head>
                    <title>Bobo Bot</title>
                    <meta name="viewport" content="viewport-fit=cover" />
                </Head>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </APIClientContext.Provider>
        </React.StrictMode>
    )
}
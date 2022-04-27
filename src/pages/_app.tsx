import React from 'react';
import { IconContext } from 'react-icons';
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
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill: '#FFFFFF' } }}>
                    <Head>
                        <title>Bobo Bot</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Head>
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </IconContext.Provider>
            </APIClientContext.Provider>
        </React.StrictMode>
    )
}

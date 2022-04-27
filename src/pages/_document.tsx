import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { NextStrictCSP } from 'next-strict-csp';
import { ServerStyleSheet } from 'styled-components';

const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head;

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {
            sheet.seal()
            }
    }

  render() {
    return (
        <Html lang='en'>
        <HeadCSP>
            <meta charSet="utf-8" />
            <link rel="icon" href="/icon.png" type="image/x-icon" />
            <meta property="og:title" content="Bobo Bot" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bobobot.cf" />
            <meta property="og:image" content="/icon.png" />
            <meta property="description" content="Bobo Bot - A Discord Bot" />
            <meta property="og:description" content="Bobo Bot - A Discord Bot" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap" rel="stylesheet" />
        </HeadCSP>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
  }
}

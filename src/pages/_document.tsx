import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/icon.png" type="image/x-icon" />
          <meta property="og:title" content="Bobo Bot" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bobobot.cf" />
          <meta property="og:image" content="/icon.png" />
          <meta property="description" content="Bobo Bot - A Discord Bot" />
          <meta property="og:description" content="Bobo Bot - A Discord Bot" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}

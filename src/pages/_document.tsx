import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="de">
            <Head>
                <Script src="https://cloudbuds.de/proxy.js" strategy="lazyOnload" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

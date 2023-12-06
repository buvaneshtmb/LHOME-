import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocuent extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                <script 
                async 
                src="https://www.googletagmanager.com/gtag/js?id=G-Z6SRZWVC3D"/>
                <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'G-Z6SRZWVC3D');
                             `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
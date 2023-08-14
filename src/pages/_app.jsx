//NEXTJS
import Head from 'next/head'
//STYLES
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head> <title> Headless Cms - Assignment </title> </Head>
            <Component {...pageProps} />
        </>
    )
}

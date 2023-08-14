//NEXTJS
import Head from 'next/head'
//STYLES
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head> <title> CMS Website </title> </Head>
            <Component {...pageProps} />
        </>
    )
}
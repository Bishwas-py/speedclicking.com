import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import {ThemeProvider} from 'next-themes'

function MyApp({Component, pageProps}) {
    return <ThemeProvider attribute="class">
        <NextNProgress/>
        <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp

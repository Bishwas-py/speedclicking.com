import React from 'react';
import Head from "next/head";
import Script from "next/script";

function Layout({className='', title="CPS Test", children}) {
    return (
        <main className={className}>
            <div>
                <Script strategy={"lazyOnload"} src={`https://www.googletagmanager.com/gtag/js?id=G-MQMPTMDET6`}/>
                <Script strategy={"lazyOnload"} dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', 'G-MQMPTMDET6');
                    `
                }}/>
            </div>
            <Head>
                <title>{`${title} | Speed Clicking`}</title>
                <meta name="description" content="A speed clicking test to see how many clicks per second you can do. Speed Clicking helps you to increase your CPS [click per second] rates."/>
                <link rel="icon" href="/favicon.png"/>

                <meta property="og:title" content="Increase your clicking skills with Speed Clicking." />
                <meta property="og:description" content="Speed Clicking is an online CPS and clicking speed tester that allows you to test and enchance your clicking speed." />
                <meta property="og:image" content="https://www.speedclicking.com/speed-clicking.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            {children}

        </main>
    );
}

export default Layout;

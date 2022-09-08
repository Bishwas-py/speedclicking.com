import React from 'react';
import Head from "next/head";
import Script from "next/script";

function Layout({className='', title="CPS Test", children}) {
    return (
        <main className={className}>
            {/* UA */}
            <Script strategy={"afterInteractive"} src={`https://www.googletagmanager.com/gtag/js?id=UA-175300558-13`}/>
            <Script id={"google-analytics-ua"} strategy={"afterInteractive"} dangerouslySetInnerHTML={{
                __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                        
                          gtag('config', 'UA-175300558-13');
                    `
            }}/>

            {/* GA4 */}
            <Script strategy={"afterInteractive"} src={`https://www.googletagmanager.com/gtag/js?id=G-W0Y2C5X29X`}/>
            <Script id={"google-analytics-ga4"} strategy={"afterInteractive"} dangerouslySetInnerHTML={{
                __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-W0Y2C5X29X');
                    `
            }}/>

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

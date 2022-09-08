import React from 'react';
import Head from "next/head";
import Script from "next/script";

function Layout({className='', title="CPS Test", children}) {
    return (
        <main className={className}>
            <>
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer', 'G-MQMPTMDET6');
                    `,
                    }}
                />
            </>
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

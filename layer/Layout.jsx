import React from 'react';
import Head from "next/head";

function Layout({className='', title="CPS Test", children}) {
    return (
        <main className={className}>
            <Head>
                <title>{`${title} | Speed Clicking`}</title>
                <meta name="description" content="A speed clicking test to see how many clicks per second you can do."/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            {children}

        </main>
    );
}

export default Layout;

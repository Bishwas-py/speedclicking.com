import React from 'react';
import Head from "next/head";

function Layout({className='', title="CPS Test", children}) {
    return (
        <main className={className}>
            <Head>
                <title>{title} | Speed Clicking</title>
            </Head>

            {children}

        </main>
    );
}

export default Layout;

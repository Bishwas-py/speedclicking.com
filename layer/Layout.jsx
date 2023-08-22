import React from 'react';
import Head from "next/head";
import Script from "next/script";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

function Layout({className = '', title = "CPS Test", children}) {
    return (
        <div>
            <main className={className}>
                {/* UA */}
                <Script strategy={"afterInteractive"}
                        src={`https://www.googletagmanager.com/gtag/js?id=UA-175300558-13`}/>
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
                    <meta name="description"
                          content="A speed clicking test to see how many clicks per second you can do. Speed Clicking helps you to increase your CPS [click per second] rates."/>
                    <link rel="icon" href="/favicon.png"/>

                    <meta property="og:title" content="Increase your clicking skills with Speed Clicking."/>
                    <meta property="og:description"
                          content="Speed Clicking is an online CPS and clicking speed tester that allows you to test and enchance your clicking speed."/>
                    <meta property="og:image" content="https://www.speedclicking.com/speed-clicking.jpg"/>
                    <meta property="og:image:width" content="1200"/>
                    <meta property="og:image:height" content="630"/>
                    <script async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6606810145118251"
                            crossOrigin="anonymous"></script>
                </Head>

                {children}


            </main>
            <footer
                className={'mt-10 py-10 bg-gray-100/50 dark:bg-gray-800/50 shadow border-t-2 border-t-blue-100 dark:border-t-blue-700'}>
                <div className={'container mx-auto px-4'}>
                    <div className={'flex flex-wrap justify-between'}>
                        <div className={'w-full lg:w-7/12 mb-5 px-2 md:mb-0 space-y-3'}>
                            <h3 className={'heading-2 text-gray-700 dark:text-gray-50'}>Speed Clicking</h3>
                            <p className={'text-gray-500 dark:text-gray-300'}>Speed Clicking is an online CPS and
                                clicking speed tester that allows you to test and enchance your clicking speed.</p>
                            <p className={'text-gray-500 dark:text-gray-300'}>I am <a
                                href={'https://bishwas.net'} className={'text-blue-500 dark:text-blue-400'}>Bishwas
                                Bhandari</a>, a web developer and designer. Ping me on <a
                                href={'https://twitter.com/BhBishwas'} className={'text-blue-500 dark:text-blue-400'}>Twitter</a> if
                                you have any questions.</p>
                        </div>
                        <div className={'w-full lg:w-3/12 mb-5 md:mb-0 space-y-3'}>
                            <h3 className={'heading-2 text-gray-700 dark:text-gray-50'}>Links</h3>
                            <ul className={'text-gray-500 dark:text-gray-300'}>
                                <li><a href={'/'}>Home</a></li>
                                <li><a href={'/left-click'}>Left Click Test</a></li>
                                <li><a href={'/right-click'}>Right Click Test</a></li>
                            </ul>
                        </div>
                        <div className={'w-full lg:w-2/12 mb-5 md:mb-0 space-y-3'}>
                            <h3 className={'heading-2 text-gray-700 dark:text-gray-50'}>Social</h3>
                            <ul className={'text-gray-500 dark:text-gray-300'}>
                                <li className={'flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-50'}>
                                    <a href={'https://www.facebook.com/webmatrices'} target={'_blank'}
                                       rel={"noopener noreferrer"}>Facebook</a></li>
                                <li className={'flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-50'}>
                                    <a href={'https://www.twitter.com/BhBishwas'} target={'_blank'}
                                       rel={"noopener noreferrer"}>Twitter</a></li>
                                <li className={'flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-50'}>
                                    <a href={'https://www.linkedin.com/in/bishwasbh'} target={'_blank'}
                                       rel={"noopener noreferrer"}>LinkedIn</a></li>
                                <li className={'flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-50'}>
                                    <a href={'https://www.instagram.com/bishwasbh'} target={'_blank'}
                                       rel={"noopener noreferrer"}>Stalk me</a></li>
                                <li className={'flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-50'}>
                                    <a href={'https://www.github.com/bishwasbh'} target={'_blank'}
                                       rel={"noopener noreferrer"}>Really, stalk me!</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Sponsored by Webmatrices */}
                    <div className={'mt-10 flex flex-wrap justify-between'}>
                        <div className={'w-full md:w-7/12 mb-5 px-2 md:mb-0 gap-3 flex flex-col'}>
                            <h3 className={'heading-2 text-gray-700 dark:text-gray-50'}>Sponsored by</h3>
                            <div className={'flex flex-col gap-3'}>
                                <a href={'https://webmatrices.com'} target={'_blank'} rel={"noopener noreferrer"}
                                   className={'flex items-center'}>
                                    <img src={'https://webmatrices.com/favicon.svg'} alt={'Webmatrices'}
                                         className={'w-7'}/>
                                    <span
                                        className={'ml-2 text-gray-500 dark:text-gray-300 font-source-sans-pro'}>Webmatrices</span>
                                </a>
                                <a href={'https://www.blogstorm.ai'} target={'_blank'} rel={"noopener noreferrer"}
                                   className={'flex items-center'}>
                                    <FontAwesomeIcon icon={faCode} className={"w-6 my-auto"}/>
                                    <span
                                        className={'ml-2 text-gray-500 dark:text-gray-300 font-source-sans-pro'}>Blogstorm</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;

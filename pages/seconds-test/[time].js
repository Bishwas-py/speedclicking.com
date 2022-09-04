import React from 'react';
import PageLayer from "../../layer/PageLayer";
import Navbar from "../../components/Navbar";
import Layout from "../../layer/Layout";
import GotoPagesLinksBox from "../../components/links/goto/GotoPagesLinksBox";

function ClickPage({time, sideValue, side}) {
    let defaultTimeLeft = time;
    let smartSideName = side[0].toUpperCase() + side.slice(1, side.length);
    let description = `Test your ${side} mouse clicking speed within ${time} seconds with this free and simple speeding clicking
                        CPS (Clicks Per Second) Tester.`;

    let defaultRippleColor = '#359dde';
    let [count, setCount] = React.useState(0);
    let [rippleColor, setRippleColor] = React.useState(defaultRippleColor);

    function handleClick(event) {
        if (event.button === sideValue) {
            setCount(count + 1);
            setRippleColor(defaultRippleColor)
        } else if (side === 'double') {
            setCount(count + 1);
        } else {
            setRippleColor('#ed95a7')
        }
    }

    return (
        <Layout title={`${smartSideName} Click CPS Test`}>
            <Navbar/>
            <div className={"top-box"}>
                <div className={"hero-section"}>
                    <h1 className={"heading-1"}>{time} seconds {side} click CPS Test</h1>
                    <h2 className={"explanation"}>
                        {description}
                    </h2>
                </div>
                <PageLayer
                    startText={`${smartSideName} click to start CPS Test of your ${side} side!`}
                    defaultTimeLeft={defaultTimeLeft}
                    handleClick={(event) => {
                        handleClick(event)
                    }}
                    setCount={setCount} count={count}
                    rippleColor={rippleColor}/>
                <GotoPagesLinksBox/>

                <div className={'smart-padding pt-0 space-y-10'}>
                    <div className={'sm:mt-0 mt-7'}>
                        <h2 className={'heading-2 mb-2'}>What is Speed Clicking?</h2>
                        <p className={'explanation'}>
                            Speed Clicking is a skill that is used in many games. It is the ability to click as fast as possible.
                            And our platform is here to help you improve your speed clicking skills.
                            Your speed clicking ability is tracked and measured in CPS rates. CPS rates allows you
                            to know about your clicking per seconds. To check your CPS rates you have to take a CPS Test.
                        </p>
                    </div>

                    <div>
                        <h2 className={'heading-2 mb-2'}>What is a CPS Test?</h2>
                        <p className={'explanation'}>
                            CPS Test is a kind of test if which you have to click a specific button of your mouse or keybord
                            in order to know how much key strokes you can press in a given limitation of times. Basically,
                            a test that allows you to know you clicking speed.
                        </p>
                    </div>


                    <div>
                        <h2 className={'heading-2 mb-2'}>How to take a CPS test?</h2>
                        <p className={'explanation'}>
                            We have develop multiple CPS tests for you, to take a CPS test you can scroll up to the
                            <strong>"CPS Timeframes"</strong> section, and choose any CPS test that you feel comfortable with.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ClickPage;

export async function getServerSideProps({query}) {
    let time = query.time;
    let sideValue;

    if (query.side === 'right') {
        sideValue = 2
    } else if (query.side === 'left') {
        sideValue = 0
    } else if (query.side === 'double') {sideValue = null}
    else {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            time: parseInt(time),
            sideValue: sideValue,
            side: query.side
        }
    }
}

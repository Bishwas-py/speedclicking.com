import React from 'react';
import PageLayer from "../../layer/PageLayer";
import Navbar from "../../components/Navbar";
import Layout from "../../layer/Layout";
import GotoPagesLinksBox from "../../components/links/goto/GotoPagesLinksBox";
import MainContent from "../../components/content/MainContent";

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
        <Layout title={`${time} second${time > 1 ? 's' : ''} ${side} click speed test`}>
            <Navbar/>
            <div className={"top-box"}>
                <div className={"hero-section"}>
                    <h1 className={"heading-1"}>{time} second{time > 1 ? 's' : ''} {side} click CPS test</h1>
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

                <MainContent/>
                <GotoPagesLinksBox/>
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

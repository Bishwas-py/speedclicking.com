import React from 'react';
import PageLayer from "../../layer/PageLayer";
import Navbar from "../../components/Navbar";
import Layout from "../../layer/Layout";
import GotoPagesLinksBox from "../../components/links/GotoPagesLinksBox";

function ClickPage({time, sideValue, side}) {
    let defaultTimeLeft = time;
    let smartSideName = side[0].toUpperCase() + side.slice(1, side.length);
    let description = `Test your ${side} mouse clicking speed with this free and simple speeding clicking
                        CPS (Clicks Per Second) Tester.`;

    let defaultRippleColor = '#359dde';
    let [count, setCount] = React.useState(0);
    let [rippleColor, setRippleColor] = React.useState(defaultRippleColor);

    function handleClick(event) {
        if (event.button === sideValue) {
            setCount(count + 1);
            setRippleColor(defaultRippleColor)
        } else {
            setRippleColor('#ed95a7')
        }
    }

    return (
        <Layout className={""} title={`${smartSideName} Click CPS Test`}>
            <Navbar/>
            <div className={"min-h-screen py-16"}>
                <div className={"p-10 text-center space-y-2"}>
                    <h1 className={"text-4xl font-bold"}>{smartSideName} Click CPS Test</h1>
                    <h2 className={"text-lg font-thin"}>
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
    } else {
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

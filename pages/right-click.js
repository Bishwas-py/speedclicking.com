import React from 'react';
import PageLayer from "../layer/PageLayer";
import Navbar from "../components/Navbar";
import Layout from "../layer/Layout";

function RightClick(props) {
    let defaultTimeLeft = 10;
    let defaultRippleColor = '#359dde';
    let [count, setCount] = React.useState(0);
    let [rippleColor, setRippleColor] = React.useState(defaultRippleColor);

    function handleClick(event) {
        if (event.button === 2) {
            setCount(count + 1);
            setRippleColor(defaultRippleColor)
        } else {
            setRippleColor('#ed95a7')
        }
    }
    return (
        <Layout className={""} title={"Right Click CPS Test"}>
            <Navbar/>
            <div className={"min-h-screen py-16"}>
                <div className={"p-10 text-center space-y-2"}>
                    <h1 className={"text-4xl font-bold"}>Right Click CPS Test</h1>
                    <h2 className={"text-lg font-thin"}>
                        Test you right mouse clicking speed with this free and simple speeding clicking
                        CPS (Clicks Per Second) Tester.
                    </h2>
                </div>
                <PageLayer
                    startText={'Right Click to Start Speed Clicking CPS Test'}
                    defaultTimeLeft={defaultTimeLeft}
                    handleClick={(event)=> {handleClick(event)}}
                    setCount={setCount}  count={count}
                    rippleColor={rippleColor}/>
            </div>
        </Layout>
    );
}

export default RightClick;

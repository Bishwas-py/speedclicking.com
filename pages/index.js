import React from 'react';
import PageLayer from "../layer/PageLayer";
import Navbar from "../components/Navbar";

function RightClick(props) {
    let defaultTimeLeft = 3;
    let defaultRippleColor = '#359dde';
    let [count, setCount] = React.useState(0);
    let [rippleColor, setRippleColor] = React.useState(defaultRippleColor);

    function handleClick(event) {
        if (event.button === 0) {
            setCount(count + 1);
            setRippleColor(defaultRippleColor)
        } else {
            setRippleColor('#ed95a7')
        }
    }
    return (
        <main className={""}>
            <Navbar/>
            <div className={"min-h-screen py-16"}>
                <div className={"p-10 text-center space-y-2"}>
                    <h1 className={"text-4xl font-bold"}>Speed Clicking CPS Test</h1>
                    <h2 className={"text-lg font-thin"}>This simple and free CPS (Clicks per Second)
                        tester will help you determine your mouse or finger tap speed.
                    </h2>
                </div>
                <PageLayer
                    startText={'Right Click to Start Speed Clicking CPS Test'}
                    defaultTimeLeft={defaultTimeLeft}
                    handleClick={(event)=> {handleClick(event)}}
                    setCount={setCount}  count={count}
                    rippleColor={rippleColor}/>
            </div>
        </main>
    );
}

export default RightClick;

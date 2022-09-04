import React from 'react';
import PageLayer from "../layer/PageLayer";
import Navbar from "../components/Navbar";
import Layout from "../layer/Layout";
import GoToPageButton from "../components/GoToPageButton";

function RightClick(props) {
    let defaultTimeLeft = 10;
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
        <Layout className={""}>
            <Navbar/>
            <div className={"min-h-screen px-60 sm:py-10 md:py-16"}>
                <div className={"py-10 text-center space-y-2"}>
                    <h1 className={"heading-1"}>Speed Clicking CPS Test</h1>
                    <h2 className={"explanation"}>This simple and free CPS (Clicks per Second)
                        tester will help you determine your mouse or finger tap speed.
                    </h2>
                </div>
                <PageLayer
                    startText={'Right Click to Start Speed Clicking CPS Test'}
                    defaultTimeLeft={defaultTimeLeft}
                    handleClick={(event)=> {handleClick(event)}}
                    setCount={setCount}  count={count}
                    rippleColor={rippleColor}/>
                <div className={'py-7 px-2'}>
                    <h2 className={"heading-1 text-gray-700 dark:text-gray-50 text-center w-full mb-3"}>CPS Timeframes</h2>
                    <div className={'grid grid-cols-4 gap-x-3 gap-y-5'}>
                        <GoToPageButton second={1}/>
                        <GoToPageButton second={2}/>
                        <GoToPageButton second={12}/>
                        <GoToPageButton second={22}/>
                        <GoToPageButton second={30}/>
                        <GoToPageButton second={40}/>
                        <GoToPageButton second={50}/>
                        <GoToPageButton second={62}/>
                        <GoToPageButton second={70}/>
                        <GoToPageButton second={80}/>
                        <GoToPageButton second={90}/>
                        <GoToPageButton second={100}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default RightClick;

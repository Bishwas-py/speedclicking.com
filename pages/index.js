import React from 'react';
import PageLayer from "../layer/PageLayer";
import Navbar from "../components/Navbar";
import Layout from "../layer/Layout";
import GotoPagesLinksBox from "../components/links/goto/GotoPagesLinksBox";
import MainContent from "../components/content/MainContent";
import Wrap from "../components/wraps/Wrap";
import WordWithMeaning from "../components/wraps/WordWithMeaning";

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
        <Layout title={"Test your click speed"}>
            <Navbar/>
            <div className={"top-box"}>
                <div className={"hero-section"}>
                    <h1 className={"heading-1"}>Speed Clicking CPS Test</h1>
                    <h2 className={"explanation max-w-3xl mx-auto"}>
                        You can use this free CPS checker/enhancer to test and enhance your {' '}
                        <WordWithMeaning word={'speed clicking'}>
                            Speed Clicking is a very essential skill for playing games like Minecraft, Fortnite, and other.
                        </WordWithMeaning> skills.
                    </h2>
                </div>
                <PageLayer
                    startText={'Right Click to Start Speed Clicking CPS Test'}
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

export default RightClick;

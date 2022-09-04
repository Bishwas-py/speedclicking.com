import React from 'react';
import PageLayer from "../layer/PageLayer";

function RightClick(props) {
    let defaultTimeLeft = 3;
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
        <PageLayer
            startText={'Right Click to Start Speed Clicking CPS Test'}
            defaultTimeLeft={defaultTimeLeft}
            handleClick={(event)=> {handleClick(event)}}
            setCount={setCount}  count={count}
            rippleColor={rippleColor}/>
    );
}

export default RightClick;

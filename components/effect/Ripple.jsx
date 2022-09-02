import React, { useState } from "react";
import { RippleContainer } from "./Ripple.styled";

function Ripple(props) {
    const { duration, color } = props;
    const [rippleArray, setRippleArray] = useState([]);

    const addRipple = event => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = event.clientX - rippleContainer.x - size / 2;
        const y = event.clientY - rippleContainer.y - size / 2;
        const newRipple = {
            x,
            y,
            size
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={"span" + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
}


export default Ripple;

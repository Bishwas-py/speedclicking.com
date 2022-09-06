import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointer} from "@fortawesome/free-solid-svg-icons";
import RippleButton from "../../effect/RippleButton";
import Ripple from "../../effect/Ripple";

function ClickingBox({handleClick, count, rippleColor, startText, timeLeft}) {
    return (
        <>
            {!!timeLeft && <div
                onMouseDown={handleClick}
                className={"select-none relative w-full h-full bg-slate-200 dark:bg-gray-700 overflow-hidden"}>
                <div className={`absolute opacity-80 ${count && 'opacity-0'} duration-200 w-full 
                                            h-full bg-slate-300/30 grid place-items-center`}>
                    <div className={"relative flex flex-col gap-4"}>
                        <FontAwesomeIcon icon={faHandPointer}
                                         className={"text-6xl w-12 w-fit mx-auto -rotate-12"}/>
                        <p className={"px-3"}>{startText}</p>
                    </div>
                </div>
                <RippleButton>
                    <Ripple color={rippleColor} duration={700}/>
                </RippleButton>
            </div>}
        </>
    );
}

export default ClickingBox;

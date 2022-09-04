import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Counter({children='', icon, title, value, color, shadow}) {
    return (
        <div className={`flex flex-col border-b-8 w-full p-5`} style={
            { borderColor: color }
        }>
            <div className={"flex justify-center gap-3"}>
                <div className={"relative flex gap-3 font-bold text-6xl"}>
                    <div
                        style={{
                            textShadow: `1px 1px ${shadow}, 2px 2px ${shadow}, 3px 3px ${shadow}, 4px 4px ${shadow};`,
                            color: color}}>{value}</div>
                    {children}
                </div>
            </div>
            <div className={"flex gap-3 justify-center text-center"}>
                <FontAwesomeIcon icon={icon} className={"w-5 my-auto"}/>
                {title}</div>
        </div>
    );
}

export default Counter;

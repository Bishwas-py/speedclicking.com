import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Counter({icon, title, value, color}) {
    return (
        <div className={`flex flex-col border-b-8 w-full p-5`} style={
            { borderColor: color }
        }>
            <div className={"flex justify-center gap-3"}>
                <div className={"flex gap-3 font-bold text-6xl"}>
                    <FontAwesomeIcon icon={icon} className={"w-12 my-auto"}/>
                    <div>{value}</div>
                </div>
            </div>
            <div className={"text-center"}>{title}</div>
        </div>
    );
}

export default Counter;

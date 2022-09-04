import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

function BigButton({children}) {
    return (
        <div className={"rounded-2xl h-20 grid place-items-center w-full text-white" +
            " text-2xl font-medium bg-cyan-500 " +
            " border-b-8 border-b-cyan-600 hover:border-b-cyan-700"}>
                {children || <div className={"w-full flex my-auto"}><FontAwesomeIcon icon={faRedo} className={"w-full my-auto"}/></div>}
        </div>
    );
}

export default BigButton;

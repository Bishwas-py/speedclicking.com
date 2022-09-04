import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

function BigButton(props) {
    return (
        <div className={"mt-4 rounded-2xl flex justify-center w-full h-20 text-white text-2xl font-medium px-2 py-4 block bg-cyan-500 border-b-8 border-b-cyan-600"}>
            <div className={"w-full flex"}>
                <FontAwesomeIcon icon={faRedo} className={"w-full my-auto"}/>
            </div>
        </div>
    );
}

export default BigButton;

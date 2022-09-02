import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BigButton(props) {
    return (
        <div className={"mx-auto mt-4 rounded-2xl flex justify-center w-72 text-white text-2xl font-medium px-2 py-4 block bg-purple-500 border-b-8 border-b-purple-600"}>
            <div className={" flex"}>
                <FontAwesomeIcon icon={faRedo} className={"w-11"}/>
                <span className={"my-auto ml-2"}>
                    RESTART
                </span>
            </div>
        </div>
    );
}

export default BigButton;
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

function BigButton({children}) {
    return (
        <div className={"big-button"}>
                {children || <div className={"w-full flex my-auto"}><FontAwesomeIcon icon={faRedo} className={"w-full my-auto"}/></div>}
        </div>
    );
}

export default BigButton;

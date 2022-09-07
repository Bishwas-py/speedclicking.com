import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Counter({children='', icon, title, value, color, shadow}) {
    return (
        <div className={`result-counter`} style={
            { borderColor: color }
        }>
            <div className={"top-counter-wrapper"}>
                <div className={"top-counter"}>
                    <div
                        style={{
                            textShadow: `1px 1px ${shadow}, 2px 2px ${shadow}, 3px 3px ${shadow}, 4px 4px ${shadow}`,
                            color: color}}>{value}</div>
                    {children}
                </div>
            </div>
            <div className={"bottom-counter"}>
                <FontAwesomeIcon icon={icon} className={"bottom-counter-icon"}/>
                {title}</div>
        </div>
    );
}

export default Counter;

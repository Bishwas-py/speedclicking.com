import React from 'react';

function Wrap(props) {
    return (
        <span className={"bg-jazzy-body text-white px-1 sm:px-2 py-1"}>
            {props.children}
        </span>
    );
}

export default Wrap;

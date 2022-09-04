import React from 'react';
import Wrap from "./wraps/Wrap";

function Navbar(props) {
    return (
        <div className={"bg-white border-b dark:border-slate-700 shadow-xl shadow-gray-100 dark:shadow w-full p-5 dark:bg-jazzy-head"}>
            <div className={"w-fit font-extrabold text-2xl"}>
                SPEED <Wrap>CLICKING</Wrap>
            </div>
        </div>
    );
}

export default Navbar;

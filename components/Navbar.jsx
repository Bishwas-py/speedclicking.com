import React from 'react';
import Wrap from "./wraps/Wrap";
import Link from "next/link";

function Navbar(props) {
    return (
        <Link href={'/'}>
            <a className={"block bg-white border-b dark:border-slate-700 shadow-xl shadow-gray-100 dark:shadow w-full p-5 dark:bg-jazzy-head"}>
                <div className={"w-fit font-extrabold text-2xl"}>
                    SPEED <Wrap>CLICKING</Wrap>
                </div>
            </a>
        </Link>
    );
}

export default Navbar;

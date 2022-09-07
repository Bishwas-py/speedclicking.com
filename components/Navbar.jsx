import dynamic from 'next/dynamic';

import React from 'react';
import Wrap from "./wraps/Wrap";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComputerMouse
} from "@fortawesome/free-solid-svg-icons";
import LeftClick from "../icons/left-click";

import LinksMenu from "./links/menu/LinksMenu";

function Navbar(props) {

    return (
        <nav className={"justify-around md:justify-around flex gap-x-3 pl-2 md:px-4 bg-white border-b dark:border-slate-700 shadow-xl shadow-gray-100 dark:shadow w-full h-16 dark:bg-jazzy-head"}>
            <Link href={'/'}>
                <a className={"w-fit self-center font-extrabold sm:text-sm md:text-xl lg:text-2xl"}>
                    SPEED <Wrap>CLICKING</Wrap>
                </a>
            </Link>
            <div className={'top-drop-nav'}>
                <LinksMenu/>
                <Link href={'/double-click'}>
                    <a className={`menu-btn`}>
                        <FontAwesomeIcon icon={faComputerMouse} className={"w-3 my-auto"}/>
                        <div className={'my-auto'}>Double Click</div>
                    </a>
                </Link>
                <Link href={'/left-click'}>
                    <a className={`menu-btn`}>
                        <LeftClick className={"my-auto fill-gray-800 dark:fill-gray-50"}/>
                        <div className={'my-auto'}>Left Click</div>
                    </a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

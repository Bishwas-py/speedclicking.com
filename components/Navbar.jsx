import React from 'react';
import Wrap from "./wraps/Wrap";
import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faHandPointer, faMousePointer} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./links/MenuItem";

function Navbar(props) {
    return (
        <div className={"flex gap-x-3 px-4 bg-white border-b dark:border-slate-700 shadow-xl shadow-gray-100 dark:shadow w-full h-16 dark:bg-jazzy-head"}>
            <Link href={'/'}>
                <a className={"w-fit self-center font-extrabold sm:text-sm md:text-xl lg:text-2xl"}>
                    SPEED <Wrap>CLICKING</Wrap>
                </a>
            </Link>
            <div className={'my-auto h-full'}>
                <button className={'menu-btn group'}>
                    <FontAwesomeIcon icon={faMousePointer} className={"w-3 my-auto"}/>
                    <div className={'my-auto'}>CPS Tests</div>
                    <FontAwesomeIcon icon={faChevronDown} className={"w-3 my-auto"}/>
                    <div className={'menu-container'}>
                        <div className={'menu-contained-box'}>
                            <MenuItem side={'left'} second={1}/>
                            <MenuItem side={'left'} second={3}/>
                            <MenuItem side={'left'} second={10}/>
                            <MenuItem side={'left'} second={20}/>
                            <MenuItem side={'left'} second={35}/>
                            <MenuItem side={'left'} second={42}/>
                            <MenuItem side={'left'} second={53}/>
                            <MenuItem side={'left'} second={60}/>
                            <MenuItem side={'left'} second={70}/>
                            <MenuItem side={'left'} second={80}/>
                            <MenuItem side={'left'} second={90}/>
                            <MenuItem side={'left'} second={100}/>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;

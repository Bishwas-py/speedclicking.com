import React from 'react';
import Wrap from "./wraps/Wrap";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faComputerMouse,
    faMousePointer
} from "@fortawesome/free-solid-svg-icons";
import LeftClick from "../icons/left-click";

import MenuItem from "./links/MenuItem";

function Navbar(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    function handleBlur(event) {
        // if the blur was because of outside focus
        // currentTarget is the parent element, relatedTarget is the clicked element
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setMenuOpen(false);
        }
    }
    return (
        <div className={"flex gap-x-3 px-4 bg-white border-b dark:border-slate-700 shadow-xl shadow-gray-100 dark:shadow w-full h-16 dark:bg-jazzy-head"}>
            <Link href={'/'}>
                <a className={"w-fit self-center font-extrabold sm:text-sm md:text-xl lg:text-2xl"}>
                    SPEED <Wrap>CLICKING</Wrap>
                </a>
            </Link>
            <div className={'my-auto h-full'}>
                <button className={`menu-btn ${menuOpen ? 'on': 'off'}`} onBlur={handleBlur} onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <FontAwesomeIcon icon={faMousePointer} className={"w-3 my-auto"}/>
                    <div className={'my-auto'}>CPS Tests</div>
                    <FontAwesomeIcon icon={faChevronDown} className={"w-3 my-auto"}/>
                    <div className={`menu-container`}>
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
                </button>
            </div>
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
    );
}

export default Navbar;

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faMousePointer} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";

function LinksMenu(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    function handleBlur(event) {
        // if the blur was because of outside focus
        // currentTarget is the parent element, relatedTarget is the clicked element
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setMenuOpen(false);
        }
    }

    return (
        <div className={'my-auto h-full'}>
            <button className={`menu-btn ${menuOpen ? 'on': 'off'}`} onBlur={handleBlur} onClick={()=>{setMenuOpen(!menuOpen)}}>
                <div className={'flex my-auto px-3 gap-x-3'}>
                    <FontAwesomeIcon icon={faMousePointer} className={"w-3 my-auto"}/>
                    <div className={'my-auto'}>CPS Tests</div>
                    <FontAwesomeIcon icon={faChevronDown} className={"w-3 my-auto"}/>
                </div>
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
    );
}

export default LinksMenu;

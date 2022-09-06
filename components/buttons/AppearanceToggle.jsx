import React from 'react';
import {useTheme} from "next-themes";

function AppearanceToggle(props) {
    const {theme, setTheme} = useTheme()

    return (
        <button>
            <span
                className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in">
                <input type="checkbox"
                       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                       defaultChecked={theme === 'dark'}
                       name="toggle" id="appearanceToggle"
                       className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label htmlFor="appearanceToggle"
                       className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </span>
            <label htmlFor="appearanceToggle" className="text-sm font-light">Dark/Light Mode</label>
        </button>
    );
}

export default AppearanceToggle;

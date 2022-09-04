import React from 'react';
import GotoPagesLinks from "./GotoPagesLinks";

function GotoPagesLinksBox(props) {
    return (
        <div className={'py-7 px-2'}>
            <h2 className={"heading-1 text-gray-700 dark:text-gray-50 text-center w-full mb-3"}>CPS
                Timeframes</h2>
            <div className={'grid grid-cols-4 gap-x-3 gap-y-5'}>
                <GotoPagesLinks/>
            </div>
        </div>
    );
}

export default GotoPagesLinksBox;

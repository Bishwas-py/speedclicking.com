import React from 'react';
import GotoPagesLinks from "./GotoPagesLinks";

function GotoPagesLinksBox(props) {
    return (
        <div className={'py-7 px-2'}>
            <h2 className={"heading-1 text-gray-700 dark:text-gray-50 text-center w-full mb-3"}>CPS
                Timeframes</h2>
            <p className={'text-center mb-7'}>Test your left mouse clicking skills and speed with these <strong>Left Mouse CPS Tester</strong></p>
            <div className={'grid grid-cols-4 gap-x-3 gap-y-5 mb-16'}>
                <GotoPagesLinks side={'left'}/>
            </div>
            <p className={'text-center mb-7'}>Test your <b>right mouse</b> clicking skills and speed with these <strong>Right Mouse CPS Tester</strong></p>
            <div className={'grid grid-cols-4 gap-x-3 gap-y-5'}>
                <GotoPagesLinks side={'right'}/>
            </div>
        </div>
    );
}

export default GotoPagesLinksBox;

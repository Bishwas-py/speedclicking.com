import React from 'react';
import GotoPagesLinks from "./GotoPagesLinks";

function GotoPagesLinksBox(props) {
    return (
        <div className={'mt-7 smart-padding'}>
            <h2 className={"heading-1 text-gray-700 dark:text-gray-50 text-center w-full mb-3"}>CPS
                Timeframes</h2>
            <p className={'text-center mb-7'}>Test your left mouse clicking skills and speed with these <strong>Left Mouse CPS Testers</strong></p>
            <div className={'goto-page-links'}>
                <GotoPagesLinks side={'left'}/>
            </div>
            <p className={'text-center mb-7'}>Test your <b>right mouse</b> clicking skills and speed with these <strong>Right Mouse CPS Testers</strong></p>
            <div className={'goto-page-links'}>
                <GotoPagesLinks side={'right'}/>
            </div>
            <p className={'text-center mb-7'}>Test your <b>double mouse</b> clicking skills and speed with these <strong>Double Clicking CPS Testers</strong></p>
            <div className={'goto-page-links'}>
                <GotoPagesLinks side={'double'}/>
            </div>
        </div>
    );
}

export default GotoPagesLinksBox;

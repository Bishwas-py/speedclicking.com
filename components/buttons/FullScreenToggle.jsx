import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMaximize, faMinimize} from "@fortawesome/free-solid-svg-icons";

function FullScreenToggle({setFullScreen, fullScreen}) {
    return (
        <button className={'flex gap-2 font-light'} onClick={()=>{setFullScreen(!fullScreen)}}>
            {fullScreen ?
                <>
                    <FontAwesomeIcon icon={faMinimize} className={'w-4 my-auto'}/>
                    <div className={'my-auto'}>Exit full screen</div>
                </>
                :
                <>
                    <FontAwesomeIcon icon={faMaximize} className={'w-4 my-auto'}/>
                    <div className={'my-auto'}>Full screen</div>
                </>
            }
        </button>
    );
}

export default FullScreenToggle;

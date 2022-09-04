import React from 'react';
import GotoPageButton from "./GotoPageButton";

function GotoPagesLinks({side='left'}) {
    return (
        <>
            <GotoPageButton second={1} side={side}/>
            <GotoPageButton second={2} side={side}/>
            <GotoPageButton second={12} side={side}/>
            <GotoPageButton second={22} side={side}/>
            <GotoPageButton second={30} side={side}/>
            <GotoPageButton second={40} side={side}/>
            <GotoPageButton second={50} side={side}/>
            <GotoPageButton second={62} side={side}/>
            <GotoPageButton second={70} side={side}/>
            <GotoPageButton second={80} side={side}/>
            <GotoPageButton second={90} side={side}/>
            <GotoPageButton second={100} side={side}/>
        </>
    );
}

export default GotoPagesLinks;

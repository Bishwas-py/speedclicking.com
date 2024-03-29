import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function MenuItem({side='left', second}) {
    let pageLink = `/${side}/${second}-seconds-test`;
    let {asPath, isReady} = useRouter();

    return (
        <Link href={pageLink}>
            <a className={`menu-item ${isReady && (asPath === pageLink && "active")}`}>
                <span className={'font-bold'}>{second} </span> second{second > 1 ? 's' : ''} <span className={'font-bold'}> {side} </span>CPS Test
            </a>
        </Link>
    );
}

export default MenuItem;

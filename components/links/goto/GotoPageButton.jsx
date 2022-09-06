import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function GotoPageButton({second, side='left'}) {
    let {asPath, isReady} = useRouter();
    let pageLink = `/${side}/${second}-seconds-test`;

    return (
        <Link href={pageLink}>
            <a className={`goto-page-btn ${isReady && (asPath === pageLink && "active")}`}>
                <span className={'font-bold'}>{second}</span> SECOND{second > 1 ? 'S' : ''} TEST
            </a>
        </Link>

    );
}

export default GotoPageButton;

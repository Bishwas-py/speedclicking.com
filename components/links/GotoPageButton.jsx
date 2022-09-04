import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function GotoPageButton({children, href, second}) {
    let router = useRouter();
    let pageLink = `/left/${second}-seconds-test`;
    return (
        <Link href={pageLink}>
            <a className={"p-2 rounded-xl text-center font-light text-slate-700 bg-slate-100 border-b-slate-200 border-b-8"+
            ` ${router.pathname === pageLink ? "active" : ""}`}>
                <span className={'font-bold'}>{second}</span> SECOND{second > 0 && 'S'} TEST
            </a>
        </Link>

    );
}

export default GotoPageButton;

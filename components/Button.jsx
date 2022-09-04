import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BigButton({children, href, second}) {
    return (
        <Link href={`/left/${second}-seconds-test`}>
            <a className={"p-2 rounded-xl text-center font-light text-slate-700 bg-slate-100 border-b-slate-200 border-b-8"}>
                <span className={'font-bold'}>{second}</span> SECOND{second > 0 && 'S'} TEST
            </a>
        </Link>

    );
}

export default BigButton;

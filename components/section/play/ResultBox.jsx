import React from 'react';
import BigButton from "../../buttons/BigButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

function ResultBox({count, countsPerSecond, rank, defaultTimeLeft, timeLeft, start}) {
    return (
        <>
            {!timeLeft && <div
                className={"result-box"}>
                <div className={"text-center flex flex-col justify-center min-h-0 max-h-full"}>
                    <div>
                        <h2 className={"text-5xl md:text-6xl font-bold mb-3 md:mb-7"}>{rank.name}</h2>
                        <h3 className={"text-lg md:text-xl"}>Your CPS result
                            is {countsPerSecond} ({count} Clicks
                            in {defaultTimeLeft} Seconds)</h3>
                    </div>
                    <img src={rank.icon} alt={'Your Avatar'}
                         className={"mx-auto h-full mb-4 min-h-0 max-h-[240px]"} draggable={"false"}/>
                    <div>
                        <h3 className={"text-sm font-light max-w-sm px-2 mx-auto"}>{rank.description}</h3>
                    </div>
                    <div className={"flex flex-col w-72 mx-auto gap-2"}>
                        <button className={"group mt-4"} onClick={start}>
                            <BigButton>
                                <div className={"px-7 gap-3 flex justify-between w-full my-auto relative"}>
                                    <div className={"my-auto w-10"}>
                                        <FontAwesomeIcon icon={faRedo}
                                                         className={"w-full group-hover:rotate-90 duration-300"}/>
                                    </div>
                                    <div className={"text-center w-full my-auto"}>RESTART</div>
                                    <code className={'bg-gray-700 px-2 rounded-md'}>r</code>
                                </div>
                            </BigButton>
                        </button>
                        <small>Press &quot;<strong>r</strong>&quot; to restart</small>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default ResultBox;

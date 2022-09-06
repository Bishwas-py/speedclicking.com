import React from 'react';
import BigButton from "../../buttons/BigButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

function ResultBox({count, countsPerSecond, rank, defaultTimeLeft, timeLeft, start}) {
    return (
        <>
            {!timeLeft && <div
                className={"result-box"}>
                <div className={"result-box-container"}>
                    <div>
                        <h2 className={"result-heading"}>{rank.name}</h2>
                        <h3 className={"md:text-lg md:text-xl"}>Your CPS result
                            is {countsPerSecond} ({count} Clicks
                            in {defaultTimeLeft} Seconds)</h3>
                    </div>
                    <img src={rank.icon} alt={'Your Avatar'}
                         className={"result-image"} draggable={"false"}/>
                    <div>
                        <h3 className={"text-sm font-light max-w-sm px-2 mx-auto"}>{rank.description}</h3>
                    </div>
                    <div className={"flex flex-col mx-auto gap-2"}>
                        <button className={"group mt-4"} onClick={start}>
                            <BigButton>
                                <div className={"px-7 gap-3 flex my-auto relative text-sm sm:text-xl md:text-2xl"}>
                                    <div className={"my-auto w-6 sm:w-7 md:w-10"}>
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

import Navbar from "../components/Navbar";
import Ripple from "../components/effect/Ripple";
import React from "react";
import RippleButton from "../components/effect/RippleButton";
import {
    faClock,
    faGaugeHigh,
    faHandPointer,
    faMortarBoard, faRedo
} from "@fortawesome/free-solid-svg-icons";

import Counter from "../components/counter/Counter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BigButton from "../components/BigButton";
import getRank from "../helpers/rank";
import useInterval from "../helpers/use_interval";
import {useRouter} from "next/router";


export default function PageLayer({
                                      defaultTimeLeft,
                                      handleClick,
                                      setCount,
                                      count,
                                      startText = "Click to Start Speed Clicking CPS Test",
                                      rippleColor = "#359dde"
                                  }) {
    let [countsPerSecond, setCountsPerSecond] = React.useState(null);
    let [startTime, setStartTime] = React.useState(0);
    let [timeLeft, setTimeLeft] = React.useState(defaultTimeLeft);
    let [rank, setRank] = React.useState(false);
    let router = useRouter();

    function start(e) {
        setCount(0);
        setCountsPerSecond(null);
        setStartTime(Date.now());
        setTimeLeft(defaultTimeLeft);
    }

    React.useEffect(() => {
        setCount(0);
        setCountsPerSecond(null);
        setStartTime(Date.now());
        setTimeLeft(defaultTimeLeft);
    }, [router]);

    React.useEffect(() => {
        if (count === 1) {
            setStartTime(Date.now());
        }

    }, [count]);

    React.useEffect(() => {
        setRank(getRank(countsPerSecond));
    }, [countsPerSecond]);

    useInterval(() => {
        if (count > 0 && timeLeft >= 1) {
            setCountsPerSecond((count / ((Date.now() - startTime) / 1000)).toFixed(2));
        }
    }, timeLeft ? 100 : null)

    useInterval(() => {
        if (count > 0 && timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
        }
    }, (timeLeft && count) ? 1000: null);

    return (
        <div className={"mx-3"}>
            <div
                onContextMenu={(event) => {
                    event.preventDefault();
                }}
                className={"flex-col flex mx-auto lg:w-[979px] rounded-2xl overflow-hidden"}>

                <div className={"flex flex-col bg-gray-800 sm:flex-row"}>
                    <div className={"flex flex-row text-white w-full"}>
                        <Counter icon={faClock} title={"TIMER"} value={timeLeft.toFixed(2) || '0.00'}
                                 color={'#7adb1f'} shadow={'#5aa118'}/>
                        <Counter icon={faGaugeHigh} title={"CLICK/SECS"} value={countsPerSecond || '0.00'}
                                 color={'#ffe52a'} shadow={'#b98046'}/>
                        <Counter icon={faMortarBoard} title={"SCORE"} value={count || '0.00'}
                                 color={'#ad92ff'} shadow={'#6c55eb'}/>
                    </div>
                </div>


                {!timeLeft ?
                    <div
                        onContextMenu={(event) => {
                            event.preventDefault();
                        }}
                        className={"grid select-none place-items-center w-full px-4 py-7 min-h-[500px] bg-slate-300 dark:bg-slate-700 overflow-hidden"}>
                        <div className={"text-center"}>
                            <div>
                                <h2 className={"text-6xl font-bold mb-7"}>{rank.name}</h2>
                                <h3 className={"text-xl"}>Your CPS result
                                    is {countsPerSecond} ({count} Clicks
                                    in {defaultTimeLeft} Seconds)</h3>
                            </div>
                            <div className={"my-3"}>
                                <img src={rank.icon} width={240} height={240} alt={'Your Avatar'}
                                       className={"mx-auto mb-4"} draggable={"false"}/>
                            </div>
                            <div>
                                <h3 className={"text-sm font-light max-w-sm px-2 mx-auto"}>{rank.description}</h3>
                            </div>

                            {!timeLeft &&
                                <button className={"group mt-4"} onClick={start}>
                                    <BigButton>
                                        <div className={"px-7 gap-3 flex justify-between w-full my-auto relative"}>
                                            <div className={"my-auto w-10"}>
                                                <FontAwesomeIcon icon={faRedo}
                                                                 className={"w-full group-hover:rotate-90 duration-300"}/>
                                            </div>
                                            <div className={"text-left w-full my-auto"}>RESTART</div>
                                        </div>
                                    </BigButton>
                                </button>
                            }
                        </div>
                    </div>
                    :
                    <div onContextMenu={(event) => {
                        event.preventDefault();
                    }}
                         onMouseDown={handleClick}
                         className={"select-none relative w-full h-[500px] bg-slate-200 dark:bg-gray-700 overflow-hidden"}>
                        <div className={`absolute opacity-80 ${count && 'opacity-0'} duration-200 w-full 
                                            h-full bg-slate-300/30 grid place-items-center`}>
                            <div className={"relative flex flex-col gap-4"}>
                                <FontAwesomeIcon icon={faHandPointer}
                                                 className={"text-6xl w-12 w-fit mx-auto -rotate-12"}/>
                                <p className={"px-3"}>{startText}</p>
                            </div>
                        </div>
                        <RippleButton>
                            <Ripple color={rippleColor} duration={700}/>
                        </RippleButton>
                    </div>
                }
            </div>
        </div>
    )
}

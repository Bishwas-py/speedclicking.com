import Head from 'next/head'
import Navbar from "../components/Navbar";
import Ripple from "../components/effect/Ripple";
import React, {useEffect} from "react";
import RippleButton from "../components/effect/RippleButton";
import {
    faClock,
    faGaugeHigh,
    faHandPointer,
    faMortarBoard, faRedo
} from "@fortawesome/free-solid-svg-icons";
import Counter from "../components/counter/Counter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import BigButton from "../components/BigButton";


export default function Home() {
    let [defaultTimeLeft, setDefaultTime] = React.useState(10);
    let [count, setCount] = React.useState(0);
    let [countsPerSecond, setCountsPerSecond] = React.useState(null);
    let [startTime, setStartTime] = React.useState(0);
    let [timeLeft, setTimeLeft] = React.useState(defaultTimeLeft);
    let [finished, setFinished] = React.useState(false);

    function start(e) {
        setCount(0);
        setCountsPerSecond(null);
        setStartTime(Date.now());
        setTimeLeft(defaultTimeLeft);
        setFinished(false);
    }

    React.useEffect(() => {
        if (count === 1) {
            setStartTime(Date.now());
        }

    }, [count]);

    useEffect(() => {
        if (count > 0 && timeLeft >= 1) {
            let interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
                setCountsPerSecond((count / ((Date.now() - startTime) / 1000)).toFixed(2));
                clearInterval(interval);
            }, 1000);
        } else {
            if (timeLeft <= 0) {
                setFinished(true);
            }
        }
    })

    function handleClick(e) {
        setCount(count + 1);
    }

    return (
        <div className={""}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={""}>
                <Navbar/>
                <div className={"min-h-screen py-16"}>
                    <div className={"p-10 text-center space-y-2"}>
                        <h1 className={"text-4xl font-bold"}>Speed Clicking CPS Test</h1>
                        <h2 className={"text-lg font-thin"}>This simple and free CPS (Clicks per Second)
                            tester will help you determine your mouse or finger tap speed.
                        </h2>
                    </div>
                    <div>
                        <div className={"flex-col flex mx-auto w-[979px] rounded-2xl overflow-hidden"}>
                            <div className={"flex flex-row bg-gray-800 text-white"}>
                                <Counter icon={faClock} title={"TIMER"} value={timeLeft.toFixed(2) || '0.00'}
                                         color={'#7adb1f'} shadow={'#5aa118'}/>
                                <Counter icon={faGaugeHigh} title={"CLICK/SECS"} value={countsPerSecond || '0.00'}
                                         color={'#ffe52a'} shadow={'#b98046'}/>
                                <Counter icon={faMortarBoard} title={"SCORE"} value={count || '0.00'}
                                         color={'#ad92ff'} shadow={'#6c55eb'}/>
                            </div>

                            {!finished ? <div onContextMenu={(event) => {event.preventDefault();}}
                                 onMouseDown={handleClick}
                                 className={"select-none relative w-full h-[479px] bg-slate-200 dark:bg-gray-700 overflow-hidden"}>

                                <div className={`absolute opacity-80 ${count && 'opacity-0'} duration-200 w-full 
                                 h-full bg-slate-300/30 grid place-items-center`}>
                                    <div className={"flex flex-col gap-4"}>
                                        <FontAwesomeIcon icon={faHandPointer} className={"w-12 mx-auto -rotate-12"}/>
                                        <p>Click to Start Speed Clicking CPS Test</p>
                                    </div>
                                </div>
                                <RippleButton>
                                    <Ripple color={"#359dde"} duration={700}/>
                                </RippleButton>
                            </div>
                            :
                            <div
                                onContextMenu={(event) => {event.preventDefault();}}
                                className={"grid select-none place-items-center w-full px-4 py-7 min-h-[500px] bg-slate-300 dark:bg-slate-700 overflow-hidden"}>
                                <div className={"text-center"}>
                                    <div>
                                        <h2 className={"text-6xl font-bold"}>Your Rank is Turtle!</h2>
                                        <h3 className={"text-xl"}>Your CPS result is {countsPerSecond} ({count} Clicks
                                            in {defaultTimeLeft} Seconds)</h3>
                                    </div>
                                    <div>
                                        <Image src={"/assets/panda.png"} layout={"intrinsic"} width={280} height={240} draggable={"false"}/>
                                    </div>
                                    <button onClick={start}>
                                        <BigButton/>
                                    </button>
                                </div>
                            </div>
                            }
                        </div>


                    </div>
                </div>
            </main>


        </div>
    )
}

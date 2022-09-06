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
import BigButton from "../components/buttons/BigButton";
import getRank from "../helpers/rank";
import useInterval from "../helpers/use_interval";
import {useRouter} from "next/router";
import Image from "next/image";
import AppearanceToggle from "../components/buttons/AppearanceToggle";
import FullScreenToggle from "../components/buttons/FullScreenToggle";
import ClickingBox from "../components/section/play/ClickingBox";
import ResultBox from "../components/section/play/ResultBox";


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
    let [fullScreen, setFullScreen] = React.useState(false);

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
        function keyDownHandler(e) {
            if (e.key.toLowerCase() === "r" && !timeLeft) {
                start();
            }
        }

        document.addEventListener('keydown', keyDownHandler);
        return () => document.removeEventListener('keydown', keyDownHandler);
    }, [timeLeft]);

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
    }, (timeLeft && count) ? 1000 : null);

    return (
        <div className={`play-section select-none ${fullScreen ? 'full-screen-on' : 'full-screen-off'}`} onContextMenu={(event) => {  event.preventDefault(); }}>
            <div className={"flex-row flex justify-between mb-2 rounded-2xl mx-3 sm:mx-6"}>
                <AppearanceToggle/>
                <FullScreenToggle setFullScreen={setFullScreen} fullScreen={fullScreen}/>
            </div>
            <div
                className={"clicking-section"}>
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
                <ResultBox count={count} rank={rank} timeLeft={timeLeft} countsPerSecond={countsPerSecond} start={start} defaultTimeLeft={defaultTimeLeft}/>
                <ClickingBox count={count} setCount={setCount} rippleColor={rippleColor} handleClick={handleClick} startText={startText} timeLeft={timeLeft}/>
            </div>
        </div>
    )
}

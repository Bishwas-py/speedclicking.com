import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function MainContent(props) {
    return (
        <article className={'smart-padding pt-11 space-y-10'}>
            <div className={'sm:mt-0 mt-7'}>
                <h2 className={'heading-2 mb-2'}>What is Speed Clicking?</h2>
                <p className={'explanation'}>
                    Speed Clicking is a skill that is used in many games. It is the ability to click as fast as
                    possible.
                    And our platform is here to help you improve your speed clicking skills.
                    Your speed clicking ability is tracked and measured in CPS rates. CPS rates allows you
                    to know about your clicking per seconds. To check your CPS rates you have to take a CPS Test.
                </p>
            </div>

            <div>
                <h2 className={'heading-2 mb-2'}>What is a CPS Test?</h2>
                <p className={'explanation'}>
                    CPS Test is a kind of test in which you have to click a specific button of your mouse or keyboard
                    in order to know how many key strokes you can press in a given limitation of time. Basically,
                    a test that allows you to know your clicking speed.
                </p>
            </div>


            <div>
                <h2 className={'heading-2 mb-2'}>How to take a CPS test?</h2>
                <p className={'explanation'}>
                    We have developed multiple CPS tests for you, to take a CPS test you can scroll up to the
                    <strong>&quot;CPS Timeframes&quot;</strong> section, and choose any CPS test that you feel
                    comfortable with.
                </p>
            </div>


            <div>
                <h2 className={'heading-2 mb-2'}>Motivation behind this web app.</h2>
                <div className={'space-y-3'}>
                    <p className={'explanation'}>
                        Hey, making a this clicking game was pretty fun, and the best part is it{"'"}s getting popular
                        day by day. I was
                        wandering around with some of my projects, and suddenly my brother appeared with his
                        extraordinary idea <FontAwesomeIcon icon={faLightbulb}
                                                            className={'w-3 text-yellow-300 inline'}/>.
                    </p>
                    <div className={'flex flex-row-reverse justify-center mb-2 gap-3'}>
                        <p className={'explanation'}>
                            He is a 14 years old kid, who plays <strong>Minecraft</strong>, and he loves doing it. I was
                            just traveling towards
                            his room and I got to know he wants a feature to be added to a web app he uses to increase his
                            Minecraft PVP skills; more specifically clicking skills.
                        </p>
                        <img src={"/brother.png"} className={"h-20 w-20 shrink-0 rounded-full object-cover"} alt={"Co-Founder of speed clicking: Binay Bhandari"}/>
                    </div>
                    <p className={'explanation'}>
                        And I thought <b>{"'why not I develop it'"}</b>? And then I developed it, and added those
                        features that he wanted.
                        Features like fullscreen and a huge place to test his clicking speed. Also, I though adding a
                        dark mode toggling
                        feature would be awesome. And finally it was ready.
                    </p>

                    <p className={'explanation'}>
                        I hope you{"'"}d love this result of collaboration between me and my 14 years old brother.
                    </p>
                </div>
            </div>
        </article>
    );
}

export default MainContent;

import React from 'react';

function MainContent(props) {
    return (
        <div className={'smart-padding pt-0 space-y-10'}>
            <div className={'sm:mt-0 mt-7'}>
                <h2 className={'heading-2 mb-2'}>What is Speed Clicking?</h2>
                <p className={'explanation'}>
                    Speed Clicking is a skill that is used in many games. It is the ability to click as fast as possible.
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
                    <strong>&quot;CPS Timeframes&quot;</strong> section, and choose any CPS test that you feel comfortable with.
                </p>
            </div>
        </div>
    );
}

export default MainContent;

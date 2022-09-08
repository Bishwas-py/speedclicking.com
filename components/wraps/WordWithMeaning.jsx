import React from 'react';

function WordWithMeaning({word, children}) {
    const [displayMeaning, setDisplayMeaning] = React.useState(false);

    function showMeaning() {
        setDisplayMeaning(!displayMeaning)
    }

    function hideMeaning() {
        setDisplayMeaning(false)
    }

    return (
        <>
            <span tabIndex={"0"} className={`group relative word-with-meaning ${displayMeaning ? 'display-meaning' : 'hide-meaning'}`} onBlur={hideMeaning}>
                <a className={"word"} onClick={showMeaning}>
                    { word }
                </a>
                <a className={"meaning"}>
                 {' '} [ { children } ]
                </a>
            </span>

        </>
    );
}

export default WordWithMeaning;

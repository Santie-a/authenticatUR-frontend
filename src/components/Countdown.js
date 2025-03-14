import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import "../styles/components/Countdown.css"

const Countdown = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);
    const [ isValid, setIsValid ] = useState(true)

    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire: () => setIsValid(false),
        autoStart: true,
    });

    return (
        <div className={"countdown"}>
            {
            isValid ?
            <p>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
            :
            <p>Code expired</p>
            }
        </div>
    );
};

export default Countdown;

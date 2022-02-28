import { useState, useEffect } from "react";

import "./detailItem.css"

const CountDown = ({hoursMinSecs}) => {
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {

        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div className="count-down">
            남은 시간은... <b>{`${hrs.toString().padStart(2, '0')}:
              ${mins.toString().padStart(2, '0')}:
              ${secs.toString().padStart(2, '0')}`}</b> 입니다!
        </div>
    );
}

export default CountDown
import React from "react";
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';

import ClubDetail from "../components/clubDetail/clubDetail";
import CountDown from "../components/detailItem/countDown";

const DetailPage = () => {
    const { id } = useParams();
    const clubs = useSelector(state => state.clubs);

    let now = new Date(); // 현재시간
    let clubStartStr = clubs[id].clubTime.substring(0, 10) + " " + clubs[id].clubTime.substring(15, 20) + ":00";
    let clubStartTime = new Date(clubStartStr);

    let interval = clubStartTime - now;

    let days = parseInt(interval / (24 * 60 * 60 * 1000));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);

    const hoursMinSecs = {hours: (days * 24 + hours), minutes: minutes, seconds: seconds};
  
    return (
        <div style={{maxWidth: "1050px", margin: "0 auto", display: "flex", flexDirection: "column"}}>
            <ClubDetail id={id} />
            <CountDown hoursMinSecs={hoursMinSecs}/>
        </div>
    )
}

export default DetailPage
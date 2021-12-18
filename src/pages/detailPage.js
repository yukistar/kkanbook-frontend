import React from "react";
import { useParams } from "react-router-dom"
import ClubDetail from "../components/clubDetail/clubDetail";
import CountDown from "../components/detailItem/countDown";

const DetailPage = () => {
    const { id } = useParams();
    const hoursMinSecs = {hours:11, minutes: 30, seconds: 5}
  
    return (
        <div style={{maxWidth: "1050px", margin: "0 auto", display: "flex", flexDirection: "column"}}>
            <ClubDetail id={id} />
            <CountDown hoursMinSecs={hoursMinSecs}/>
        </div>
    )
}

export default DetailPage
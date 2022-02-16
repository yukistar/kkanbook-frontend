import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Cookies } from "react-cookie";
import { FaBook, FaCalendarAlt } from 'react-icons/fa';
import CountDown from "../components/detailItem/countDown";
import ClubChatBtn from "../components/detailItem/clubChatBtn";
import ClubDeleteBtn from "../components/detailItem/clubDeleteBtn";
import ClubEditBtn from "../components/detailItem/clubEditBtn";
import ClubBook from "../components/clubDetail/clubBook";
import "../components/clubDetail/clubDetail.css";

const DetailPage = () => {
    const clubs = useSelector(state => state.clubs);
    const { id } = useParams();
    const cookiesUser = new Cookies().get('rememberUser');

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
        <div className="detail-page">
        <div>
            <ClubBook 
                bookTitle={clubs[id].bookTitle} bookImage={clubs[id].bookImage}
            />
            <div className="club-detail">
                <div className="detail-club-title">{clubs[id].clubTitle}</div>
                <div className="detail-club-description">
                    {clubs[id].clubDescription}
                </div>
                <div className="detail-book-title"><FaBook /> {clubs[id].bookTitle}</div>
                <div className="detail-club-time"><FaCalendarAlt /> {clubs[id].clubTime}</div>
                {interval <= 0 ?
                    <ClubChatBtn />
                    : <CountDown hoursMinSecs={hoursMinSecs}/>
                }
                {interval > 3600000 && cookiesUser && clubs[id].clubCreator === cookiesUser ?
                    <div style={{display: "flex", marginTop: "30px", float: "right"}}>
                        <ClubEditBtn />
                        <ClubDeleteBtn />
                    </div>
                : null
                }
            </div>
        </div>
        </div>
    )
}

export default DetailPage
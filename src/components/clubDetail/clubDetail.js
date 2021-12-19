import React from "react";
import { useParams } from 'react-router-dom';
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

import ClubBook from "./clubBook";
import "./clubDetail.css"

import { useSelector } from 'react-redux';

const ClubDetail = () => {
    const clubs = useSelector(state => state.clubs);
    const { id } = useParams();
    return (
        <div className="col">
            <div className="club-detail row">
                <div className="detail-club-title">{clubs[id].clubTitle}</div>
                <div className="detail-club-description">
                    {clubs[id].clubDescription}
                </div>
                <div className="detail-book-title"><FaBook /> {clubs[id].bookTitle}</div>
                <div className="detail-club-time"><FaCalendarAlt /> {clubs[id].clubTime}</div>
            </div>

            <ClubBook />
        </div>
    )
}


export default ClubDetail
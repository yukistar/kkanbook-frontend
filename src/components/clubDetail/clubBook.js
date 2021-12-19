import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./clubDetail.css"

const ClubBook = () => {
    const clubs = useSelector(state => state.clubs);
    const { id } = useParams();

    return (
        <div className="club-book">
            <img 
                className="detail-book-image" 
                src={clubs[id].bookImage} 
                alt="book"
            />
        </div>
    )
}


export default ClubBook
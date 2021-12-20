import React from "react";

import "./clubDetail.css"

const ClubBook = (props) => {
    return (
        <div className="club-book">
            <img 
                className="detail-book-image" 
                src={props.bookImage} 
                alt="book"
            />
        </div>
    )
}


export default ClubBook
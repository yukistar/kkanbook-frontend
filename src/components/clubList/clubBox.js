import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./clubList.css"
import { FaBook, FaCalendarAlt } from 'react-icons/fa';


const ClubBox = (props) => {
    const [thisClubId] = useState(props.clubId);
    const onBoxClick = (e) => {
        window.location.href = "/detail/" + thisClubId;
        e.stopPropagation();
    }

    return (
        <div className="club-box nanumgothic">
            <Card className="card-box" onClick={onBoxClick}>
                <Card.Img className="book-image" variant="top" src={props.bookImage} />
                <Card.Body>
                    <Card.Title className="club-title">{props.clubTitle}</Card.Title>
                    <Card.Text className="club-description">{props.clubDescription}</Card.Text>
                    <Card.Text className="book-title"><FaBook /> {props.bookTitle}</Card.Text>
                    <Card.Text className="club-time"><FaCalendarAlt /> {props.clubTime}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClubBox
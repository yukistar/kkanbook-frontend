import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import "./clubList.css"
import { FaBook, FaCalendarAlt } from 'react-icons/fa';
import Badge from "react-bootstrap/Badge";

const ClubBox = (props) => {
    const history = useHistory();
    const [thisClubId] = useState(props.clubId);

    const onBoxClick = (e) => {
        history.push("/detail/" + thisClubId);
        e.stopPropagation();
    }

    const now = new Date();
    const clubStartStr = props.clubTime.substring(0, 10) + " " + props.clubTime.substring(15, 20) + ":00";
    const clubStartTime = new Date(clubStartStr);
    const interval = clubStartTime - now;

    return (
        <div className="club-box">
            <Card className="card-box" onClick={onBoxClick}>
                {interval <= 0 ?
                    <Badge className="box-badge" bg="warning" text="dark" style={{fontSize: 14}}>진행 중</Badge>
                    : null
                }
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
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Cookies } from "react-cookie";
import { useSelector, useDispatch } from 'react-redux';
import Card from "react-bootstrap/Card";
import "./clubList.css"
import { FaBook, FaCalendarAlt } from 'react-icons/fa';
import Badge from "react-bootstrap/Badge";
import styled from "@emotion/styled";
import { addParticipateClub, deleteParticipateClub } from "../../actions/index";

const Heart = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    float: right;
    &:before,
    &:after{
        position: absolute;
        content: "";
        left: 10px;
        width: 10px;
        height: 17px;
        background-color: ${props => (props.color)};
        -moz-border-radius: 50px 50px 0 0;
        border-radius: 50px 50px 0 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transition: background-color .1s linear;
        transition: background-color .1s linear;
    }
    &:after{
        left: 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 100% 100%;
        transform-origin :100% 100%;
    }
    .
`;



const ClubBox = (props) => {
    const history = useHistory();
    const [thisClubId] = useState(props.clubId);

    const dispatch = useDispatch();
    const cookiesUser = new Cookies().get('rememberUser');
    const users = useSelector(state => state.users);

    const onBoxClick = (e) => {
        history.push("/detail/" + thisClubId);
        e.stopPropagation();
    }

    const onLikeClick = (e) => {
        if (users[cookiesUser]["participateClubs"].includes(thisClubId)) {
            dispatch(deleteParticipateClub(cookiesUser, thisClubId));
        } else {
            dispatch(addParticipateClub(cookiesUser, thisClubId));
        }
    }

    const now = new Date();
    const clubStartStr = props.clubTime.substring(0, 10) + " " + props.clubTime.substring(15, 20) + ":00";
    const clubStartTime = new Date(clubStartStr);
    const interval = clubStartTime - now;

    return (
        <div className="club-box">
            <Card className="card-box">
                <div onClick={onBoxClick}>
                    {interval <= 0 ?
                        <Badge className="box-badge" bg="warning" text="dark" style={{fontSize: 14}}>진행 중</Badge>
                    : null}
                    <Card.Img className="book-image" variant="top" src={props.bookImage} />
                    <Card.Body>
                        <Card.Title className="club-title">{props.clubTitle}</Card.Title>
                        <Card.Text className="club-description">{props.clubDescription}</Card.Text>
                        <Card.Text className="book-title"><FaBook /> {props.bookTitle}</Card.Text>
                        <Card.Text className="club-time"><FaCalendarAlt /> {props.clubTime}</Card.Text>
                    </Card.Body>
                </div>
                {cookiesUser ?
                    <div className="box-like" onClick={onLikeClick}>
                    {(users[cookiesUser]["participateClubs"].includes(thisClubId)) ?
                        <Heart color={"var(--main-color)"} />
                    :
                        <Heart color={"rgb(212, 211, 211)"} />
                    }
                    </div>
                : null}

            </Card>
        </div>
    )
}

export default ClubBox
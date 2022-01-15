import React from "react";
import { useParams, useHistory } from "react-router-dom"
import { Cookies } from "react-cookie";
import { useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import "./detailItem.css"

const ClubChatBtn = () => {
    const { id } = useParams();
    const history = useHistory();
    const cookiesUser = new Cookies().get('rememberUser');

    const clubs = useSelector(state => state.clubs);
    const users = useSelector(state => state.users);

    const clickedChatBtn = () => {
        cookiesUser ?
            history.push({
                pathname: "/chat", 
                search: `?name=${users[cookiesUser].userName}&room=${clubs[id].clubTitle}`, 
                state: {bookImage: clubs[id].bookImage, bookTitle: clubs[id].bookTitle, clubTime: clubs[id].clubTime}
            }) 
        :
            history.push({pathname: "/signin", state: {history: history.location.pathname}});
    }

    return (
        <div className="club-chat-btn">
            <Button 
                variant="outline-secondary"
                size="sm"
                onClick={clickedChatBtn}
            >채팅</Button>
        </div>
    )
}

export default ClubChatBtn 
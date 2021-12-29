import React from "react";
import { useParams } from "react-router-dom"
import Button from "react-bootstrap/Button";

import "./detailItem.css"

const ClubChatBtn = () => {
    const { id } = useParams();

    const clickedChatBtn = () => {
        window.location.href = "/join/" + id;
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
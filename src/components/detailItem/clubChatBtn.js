import React from "react";
import { useParams, useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button";

import "./detailItem.css"

const ClubChatBtn = () => {
    const { id } = useParams();
    const history = useHistory();

    const clickedChatBtn = () => {
        history.push("/join/" + id);
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
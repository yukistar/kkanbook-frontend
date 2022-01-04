import React from "react";
import { useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button";
import "./clubPost.css"

const ClubPost = () => {
    const history = useHistory();

    const clickedPostBtn = () => {
        history.push("/post");
    }

    return (
        <div className="club-post">
            <Button 
                onClick={clickedPostBtn}
                size="lg" className="popup-button"
            >+</Button>
        </div>
    )
}

export default ClubPost
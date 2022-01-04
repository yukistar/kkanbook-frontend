import React from "react";
import Button from "react-bootstrap/Button";
import ClubWrite from "./clubWrite";
import "./clubPost.css"

const ClubPost = (props) => {
    return (
        <div className="club-post">
            <Button 
                onClick={props.togglePopup}
                size="lg" className="popup-button"
            >+</Button>
            {props.showPopup ? 
                <ClubWrite closePopup={props.togglePopup}/> 
                : null}
        </div>
    )
}

export default ClubPost
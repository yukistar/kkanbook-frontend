import React from "react";
import Button from "react-bootstrap/Button";
import ClubWrite from "./clubWrite";
import "./clubPost.css"

const ClubPost = (props) => {
    return (
        <div className="club-post">
            <Button variant="outline-secondary" onClick={props.togglePopup} size="lg" className="popup-button">+</Button>
            {props.showPopup ? 
                <ClubWrite closePopup={props.togglePopup} clubLists={props.clubLists} createclub={props.createclub}/> 
                : null}
        </div>
    )
}

export default ClubPost
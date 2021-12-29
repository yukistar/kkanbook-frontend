import React from "react";
import { useParams, useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button";

import "./detailItem.css"

const ClubEditBtn = () => {
    const { id } = useParams();
    const history = useHistory();
    const clickedEditBtn = (e) => {
        history.push("/edit/" + id);
        e.stopPropagation();
    }

    return (
        <div className="club-edit-btn">
            <Button 
                variant="outline-secondary"
                size="sm"
                className="delete-button"
                onClick={clickedEditBtn}
            >수정</Button>
        </div>
    )
}

export default ClubEditBtn 
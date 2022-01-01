import React from "react";
import { useParams, useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button";

import { useDispatch } from 'react-redux';
import { deleteClub } from "../../actions/index";

import "./detailItem.css"

const ClubDeleteBtn = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const clickedDeleteBtn = () => {
        dispatch(deleteClub(id), [dispatch]);
        history.replace("/");
    }

    return (
        <div className="club-delete-btn">
            <Button 
                variant="outline-secondary"
                size="sm"
                className="delete-button"
                onClick={clickedDeleteBtn}
            >삭제</Button>
        </div>
    )
}

export default ClubDeleteBtn 
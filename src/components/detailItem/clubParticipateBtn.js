import React from "react";
import { useParams } from "react-router-dom"
import { Cookies } from "react-cookie";
import Button from "react-bootstrap/Button";

import { useDispatch } from 'react-redux';
import { addParticipateClub } from "../../actions/index";

import "./detailItem.css"

const ClubParticipateBtn = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cookiesUser = new Cookies().get('rememberUser');

    const clickedParticipateBtn = (e) => {
        if (cookiesUser !== undefined) {
            dispatch(addParticipateClub(cookiesUser, id));
        }
        else {
            alert("로그인 플리즈")
        }
        e.stopPropagation();
    }

    return (
        <div className="club-edit-btn">
            <Button 
                variant="outline-secondary"
                size="sm"
                className="delete-button"
                onClick={clickedParticipateBtn}
            >참여</Button>
        </div>
    )
}

export default ClubParticipateBtn 
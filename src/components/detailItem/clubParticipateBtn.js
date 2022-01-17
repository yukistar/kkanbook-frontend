import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Cookies } from "react-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "../clubPost/alert"

import { useDispatch } from 'react-redux';
import { addParticipateClub, deleteParticipateClub } from "../../actions/index";

import "./detailItem.css"

const ClubParticipateBtn = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const cookiesUser = new Cookies().get('rememberUser');
    const users = useSelector(state => state.users);

    const [loginConfirm, setLoginConfirm] = useState(false);  //로그인 모달
    const [alertMessage, setAlertMessage] = useState("");

    const closeLoginConfirm = () => setLoginConfirm(false)
    const goSigninPage = () => {
        history.push({pathname: "/signin", state: {history: history.location.pathname}});
    }

    const clickedParticipateBtn = (e) => {
        if (cookiesUser !== undefined) {
            if (users[cookiesUser]["participateClubs"].includes(id)) {
                dispatch(deleteParticipateClub(cookiesUser, id));
                setAlertMessage("참여 취소가 완료되었습니다.");
            }
            else {
                dispatch(addParticipateClub(cookiesUser, id));
                setAlertMessage("참여 예약이 완료되었습니다.");
            }
        }
        else {
            setLoginConfirm(true);
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
            >{(users[cookiesUser]["participateClubs"].includes(id)) ? "참여 취소" : "참여"}</Button>
            <Modal dialogClassName='custom-dialog' show={loginConfirm} onHide={closeLoginConfirm}>
                <Modal.Body className="modal-text">로그인 후에 사용해주세요.</Modal.Body>
                <div style={{margin: "0 auto", marginTop: "-15px", marginBottom: "15px"}}>
                    <Button className="delete-custom" onClick={goSigninPage}>
                        확인
                    </Button>
                </div>
            </Modal>
            {alertMessage !== "" ? 
                <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
            : null}      
        </div>
    )
}

export default ClubParticipateBtn 
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from 'react-redux';
import { deleteClub } from "../../actions/index";

import "./detailItem.css"

const ClubDeleteBtn = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const clickedDeleteBtn = () => {
        dispatch(deleteClub(id), [dispatch]);
        history.replace("/");
    }

    const closeDeleteConfirm = () => setDeleteConfirm(false);
    const showDeleteConfirm = () => setDeleteConfirm(true);

    const confirmButtonRight = {
        width: "100%",
        height: "43px",
        borderRadius: "0px 0px 3px 0px",
        fontSize: "14px"
    }

    const confirmButtonLeft = {
        width: "100%",
        height: "43px",
        borderRadius: "0px 0px 0px 3px",
        fontSize: "14px"
    }

    return (
        <div className="club-delete-btn">
            <Button 
                variant="outline-secondary"
                size="sm"
                className="delete-button"
                onClick={showDeleteConfirm}
            >삭제</Button>
            <Modal dialogClassName='custom-dialog' show={deleteConfirm} onHide={closeDeleteConfirm}>
                <Modal.Body className="modal-text">정말로 삭제하시겠습니까?<br/>삭제 후에는 복구되지 않습니다.</Modal.Body>
                <div style={{width: "100.2%", marginBottom: "-0.5px"}}>
                    <div class="left">
                        <Button style={confirmButtonLeft} variant="secondary" onClick={closeDeleteConfirm}>
                            취소
                        </Button>
                    </div>
                    <div class="right">
                        <Button style={confirmButtonRight} variant="primary" onClick={clickedDeleteBtn}>
                            삭제
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ClubDeleteBtn 
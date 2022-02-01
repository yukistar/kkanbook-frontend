import './clubChat.css'
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteClub } from "../../actions/index";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InfoBar = (props) => {
  const dispatch = useDispatch();
  const [clearConfirm, setClearConfirm] = useState(false);

  const closeClearConfirm = () => setClearConfirm(false);
  const showClearConfirm = () => setClearConfirm(true);

  const clickedClearBtn = (e) => {
    props.clear();
    closeClearConfirm();
    dispatch(deleteClub(props.clubId), [dispatch]);
  }

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
    <div className="info-bar">
      {props.room}
      {props.cookiesUser && props.cookiesUser === props.clubCreator ? 
        <div style={{float:"right", marginRight:"5px"}}>
          <CloseButton onClick={showClearConfirm}/>
          <Modal dialogClassName='custom-dialog' show={clearConfirm} onHide={closeClearConfirm}>
            <Modal.Body className="modal-text">정말로 종료하시겠습니까?<br/>종료 후에는 재시작이 불가합니다.</Modal.Body>
              <div style={{width: "100.2%", marginBottom: "-0.5px"}}>
                <div className="left">
                  <Button style={confirmButtonLeft} variant="secondary" onClick={closeClearConfirm}>
                    취소
                  </Button>
                </div>
                <div className="right">
                  <Button style={confirmButtonRight} className="delete-custom" onClick={clickedClearBtn}>
                    종료
                  </Button>
                </div>
              </div>
            </Modal>
        </div>
      : null}
    </div>
  )
}

export default InfoBar

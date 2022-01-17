import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Alert from "../clubPost/alert"
import "./authItem.css"

import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from "../../actions/index";

const SignupForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [userName, setUserName] = useState("");

    const [checkDuplicate, setCheckDuplicate] = useState(false);      //중복체크 했는지 안했는지
    const [duplicateConfirm, setDuplicateConfirm] = useState(false);  //중복체크 모달
    const [alertMessage, setAlertMessage] = useState("");

    const closeDuplicateConfirm = () => setDuplicateConfirm(false);
    const showDuplicateConfirm = () => setDuplicateConfirm(true);
    const checkDuplicateConfirm = () => {
        setDuplicateConfirm(false)
        setCheckDuplicate(true)
    };

    const handleSignup = (event) => {
        if (userId === "" || userPassword === "" || checkPassword === "" || userName === "") {
            setAlertMessage("모든 항목을 입력해주세요.");
        } else if (checkDuplicate === false) {
            setAlertMessage("ID 중복 검사를 진행해주세요.");
        } else {
            dispatch(signupUser(userId, userPassword, userName));
            history.replace({
                pathname: "/signin", 
                state: {history: history.location.state.history}
            }) 
        }
    };

    return (
        <div className='auth-form'>
            <h3 className='titleh3'>회원가입</h3>
            <Form style={{marginTop:"15px"}}>
                <InputGroup className="mb-3">
                    <Form.Control
                        rows={1} className="system-font"
                        placeholder="ID"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                    />
                    <Button 
                        variant="outline-secondary"
                        className="basic-button"
                        onClick={showDuplicateConfirm}
                    >중복 검사</Button>
                </InputGroup>
                <Modal dialogClassName='custom-dialog' show={duplicateConfirm} onHide={closeDuplicateConfirm}>
                    {(userId in users) ?
                        (<>
                            <Modal.Body className="modal-text">이미 존재하는 ID입니다.</Modal.Body>
                            <div style={{margin: "0 auto", marginTop: "-15px", marginBottom: "15px"}}>
                                <Button className="delete-custom" onClick={closeDuplicateConfirm}>
                                    확인
                                </Button>
                            </div>
                        </>)
                    :
                        (<>
                            <Modal.Body className="modal-text">사용 가능한 ID입니다.</Modal.Body>
                            <div style={{margin: "0 auto", marginTop: "-15px", marginBottom: "15px"}}>
                                <Button className="delete-custom" onClick={checkDuplicateConfirm}>
                                    확인
                                </Button>
                            </div>
                        </>)
                    }

                </Modal>
                <Form.Group className="mb-3">
                    <Form.Control
                        rows={1} className="system-font" type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        rows={1} className="system-font" type="password"
                        placeholder="Password 확인"
                        value={checkPassword}
                        onChange={e => setCheckPassword(e.target.value)}
                    />
                {userPassword !== "" && checkPassword !== "" ?
                    userPassword === checkPassword ?
                        (<Form.Text className="text-muted">비밀번호가 일치합니다.</Form.Text>)
                    :
                        (<Form.Text className="text-muted">비밀번호가 일치하지 않습니다.</Form.Text>)
                : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        rows={1} className="system-font"
                        placeholder="이름"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Button
                    className="basic-button"
                    style={{width:"100%"}}
                    variant="outline-secondary"
                    onClick={handleSignup}
                >회원가입</Button>
            </Form>
            {alertMessage !== "" ? 
                <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
            : null}
        </div>
    )
}

export default SignupForm

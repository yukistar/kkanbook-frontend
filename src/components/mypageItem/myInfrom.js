import React, { useState } from "react";
import { Cookies } from "react-cookie";
import { useSelector, useDispatch } from 'react-redux';

import { editUserName, editUserPassword } from "../../actions/index";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "../common/alert"

const Mp = styled.div`
    margin-top: 20px;
    display: flex;
    margin-left: 15px;
`;

const Name = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 5px;
`;

const Coment = styled.div`
    font-size: 1.1rem;
    padding-top: 7px;
`;

const PersonalInform = styled.div`
    margin-top: 10px;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgba(187, 187, 187, 0.384);
`;

const MyInform = () => {
    const cookiesUser = new Cookies().get('rememberUser');
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [newUserName, setNewUserName] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [editPasswordDiv, setEditPasswordDiv] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [checkNewPassword, setcheckNewPassword] = useState("");

    const clickedEditNameBtn = () => {
        dispatch(editUserName(cookiesUser, newUserName));
    }

    const clickedEditPasswordBtn = (e) => {
        if (currentPassword === users[cookiesUser]["userPassword"]) {
            if (newPassword !== "" && newPassword === checkNewPassword) {
                dispatch(editUserPassword(cookiesUser, newPassword), []);
                setAlertMessage("비밀번호 변경이 완료되었습니다.");
                setEditPasswordDiv(false);
                setCurrentPassword(""); setNewPassword(""); setcheckNewPassword("");
            } else {
                setAlertMessage("새 비밀번호가 일치하지 않습니다.");
            }
        } else {
            setAlertMessage("현재 비밀번호가 일치하지 않습니다.");
        }
    }

    return (
        <div style={{margin: "0 auto", maxWidth: "800px"}}>
        {cookiesUser ? 
        <>
            <Mp>
                <Name>{users[cookiesUser]["userName"]}</Name>
                <Coment>님의 마이페이지</Coment>
            </Mp>
            <PersonalInform>
                <InputGroup className="mb-3">
                    <Form.Control
                        rows={1} className="system-font"
                        placeholder={users[cookiesUser]["userName"]}
                        value={newUserName}
                        onChange={e => setNewUserName(e.target.value)}
                    />
                    <Button 
                        variant="outline-secondary" className="basic-button"
                        onClick={clickedEditNameBtn}
                    >이름 변경</Button>
                </InputGroup>
            {editPasswordDiv ? 
                <Form>
                    <Form.Control
                        rows={1} className="system-font" type="password" autoComplete="on"
                        placeholder="현재 비밀번호"
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                    <Form.Control
                        rows={1} className="system-font" type="password" autoComplete="on"
                        placeholder="새 비밀번호"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <Form.Group className="mb-3">
                        <Form.Control
                            rows={1} className="system-font" type="password" autoComplete="on"
                            placeholder="새 비밀번호 확인"
                            value={checkNewPassword}
                            onChange={e => setcheckNewPassword(e.target.value)}
                        />
                {newPassword !== "" && checkNewPassword !== "" ?
                    newPassword === checkNewPassword ?
                        (<Form.Text className="text-muted">비밀번호가 일치합니다.</Form.Text>)
                    :
                        (<Form.Text className="text-muted">비밀번호가 일치하지 않습니다.</Form.Text>)
                : null}
                    </Form.Group>
                    <div style={{textAlign: "center", marginTop: "15px"}}>
                        <Button 
                            variant="outline-secondary" className="basic-button"
                            onClick={clickedEditPasswordBtn}
                        >비밀번호 변경</Button>
                    </div>
                </Form>
            :
                <div style={{textAlign: "center", marginBottom: "0px"}}>
                    <Button 
                        variant="outline-secondary" className="basic-button"
                        onClick={e => setEditPasswordDiv(true)}
                    >비밀번호 변경</Button>
                </div>
            }
            </PersonalInform>
            {alertMessage !== "" ? 
                <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
            : null}
        </> 
        : null}
    </div>
    )
}

export default MyInform
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import { useSelector, useDispatch } from 'react-redux';

import { editUserName } from "../../actions/index";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

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
    const [userName, setUserName] = useState("");

    const clickedEditNameBtn = () => {
        dispatch(editUserName(cookiesUser, userName));
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
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <Button 
                        variant="outline-secondary"
                        className="basic-button"
                        onClick={clickedEditNameBtn}
                    >이름 변경</Button>
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control
                        rows={1} className="system-font"
                        placeholder={users[cookiesUser]["userName"]}
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <Button 
                        variant="outline-secondary"
                        className="basic-button"
                    >비번 변경</Button>
                </InputGroup>
            </PersonalInform>
        </> 
        : null}
    </div>
    )
}

export default MyInform
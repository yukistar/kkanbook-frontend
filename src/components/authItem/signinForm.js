import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./authItem.css"

import { useSelector } from 'react-redux';

const SigninForm = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const users = useSelector(state => state.users);

    const handleSignin = (event) => {
        if (userId in users) {
            if (userPassword === users[userId].userPassword) {
                alert("로그인 성공");
            } else {
                alert("비밀번호 틀림");
            }
        } else {
            alert("존재하는 아이디 없음");
        }
        event.stopPropagation();
    };

    return (
        <div className='auth-form'>
            <h3 className='titleh3'>로그인</h3>
            <Form style={{marginTop:"15px"}}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        rows={1} className="system-font" placeholder="ID"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        rows={1} className="system-font" type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    className="basic-button"
                    style={{width:"100%"}}
                    variant="outline-secondary"
                    onClick={handleSignin}
                >로그인</Button>
            </Form>
            <div className="a-box">
                <Link to="/signup">회원가입</Link>
            </div>
        </div>
    )
}

export default SigninForm

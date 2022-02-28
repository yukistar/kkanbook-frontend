import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "../common/alert"
import "./authItem.css"

const Signin = () => {
    const history = useHistory();
    const users = useSelector(state => state.users);

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const [cookies, setCookie] = useCookies(['rememberUser']);

    useEffect(() => {
        if(cookies.rememberUser !== undefined) {
            setUserId(cookies.rememberUser);
        }
     }, [cookies.rememberUser]);

    const handleSignin = (event) => {
        if (userId in users && userPassword === users[userId].userPassword) {
            setCookie('rememberUser', userId, {path:'/', maxAge: 2000});
            window.location.replace(history.location.state.history); // 새로고침 되도록
        } else {
            setAlertMessage("ID와 비밀번호를 다시 확인해주세요.");
        }
        event.stopPropagation();
    };

    return (
        <div className='auth'>
        <div className='auth-form'>
            <h3 className='titleh3'>로그인</h3>
            <Form style={{marginTop:"15px"}}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        rows={1} className="system-font" placeholder="ID"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? handleSignin(e) : null}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        rows={1} className="system-font" type="password" autoComplete="on"
                        placeholder="Password"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? handleSignin(e) : null}
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
                <Link
                    to={{pathname: '/signup', state: {history: history.location.state.history}}}>
                회원가입</Link>
            </div>
            {alertMessage !== "" ? 
                <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
            : null}
        </div>
        </div>
    )
}

export default Signin

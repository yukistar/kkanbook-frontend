import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./authItem.css"

const SigninForm = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return (
        <div className='auth-form'>
            <h3 className='titleh3'>로그인</h3>
            <Form style={{marginTop:"15px"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" rows={1} className="system-font"
                        placeholder="ID"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea" rows={1} className="system-font"
                        placeholder="Password"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    className="basic-button"
                    style={{width:"100%"}}
                    variant="outline-secondary"
                >로그인</Button>
            </Form>
            <div className="a-box">
                <Link to="/signup">회원가입</Link>
            </div>
        </div>
    )
}

export default SigninForm

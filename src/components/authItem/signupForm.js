import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./authItem.css"

const SignupForm = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <div className='auth-form'>
            <h2 className='titleh3'>회원가입</h2>
            <Form style={{marginTop:"15px"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>이메일</Form.Label>
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea" rows={1} className="system-font"
                        placeholder="이름"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Button
                    style={{width:"100%"}}
                    variant="outline-secondary"
                >회원가입</Button>
            </Form>
        </div>
    )
}

export default SignupForm

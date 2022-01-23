import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { Cookies } from "react-cookie";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import Alert from "./alert.js"
import "./clubPost.css"

import { useDispatch } from 'react-redux';
import { addClub } from "../../actions/index";

const ClubWrite = () => {
    const history = useHistory();
    const cookiesUser = new Cookies().get('rememberUser');

    const [clubTitle, setClubTitle] = useState("");
    const [clubDescription, setClubDescription] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [clubTime, setClubTime] = useState(null);
    const [bookImage, setBookImage] = useState("");
    const [bookKind, setBookKind] = useState("");
    const [searchCheck, setSearchCheck] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const dispatch = useDispatch();
  
    const onCreate = (clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, clubCreator) => {
        dispatch(addClub(clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, clubCreator));
    }

    const handleSubmit = (event) => {
        if (clubTitle === "" || clubDescription === "" || bookTitle === "" || clubTime === null) {
            setAlertMessage("모든 항목을 입력해주세요.");
        } else if (searchCheck === false) {
            setAlertMessage("책을 검색하여 선택해주세요.");
        } else {
            onCreate(clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, cookiesUser);
            history.replace("/main");
        }
    };


    return (
        <div className='edit-form'>
                <Form style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 제목</Form.Label>
                        <Form.Control 
                            as="textarea" rows={1} className="system-font"
                            value={clubTitle}
                            onChange={e => setClubTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 소개</Form.Label>
                        <Form.Control
                            as="textarea" rows={5} className="system-font"
                            value={clubDescription}
                            onChange={e => setClubDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 도서</Form.Label>
                        <BookSearch
                            bookTitle={bookTitle} setBookTitle={setBookTitle}
                            bookImage={bookImage} setBookImage={setBookImage}
                            bookKind={bookKind} setBookKind={setBookKind}
                            searchCheck={searchCheck} setSearchCheck={setSearchCheck}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 시간</Form.Label>
                        <ClubDate clubTime={clubTime} setClubTime={setClubTime}/>
                        </Form.Group>
                    <Button
                        variant="outline-secondary"
                        className="basic-button"
                        onClick={handleSubmit}
                    >Submit</Button>
                </Form>
                {alertMessage !== "" ? 
                    <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
                : null}
        </div>
    )
}

export default ClubWrite
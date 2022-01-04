import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import "./clubPost.css"

import { useDispatch } from 'react-redux';
import { addClub } from "../../actions/index";

const ClubWrite = () => {
    const history = useHistory();

    const [clubTitle, setClubTitle] = useState("");
    const [clubDescription, setClubDescription] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [clubTime, setClubTime] = useState(null);
    const [bookImage, setBookImage] = useState("");
    const [bookKdc, setBookKdc] = useState("");
    const [searchCheck, setSearchCheck] = useState(false);

    const dispatch = useDispatch();
  
    const onCreate = (clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKdc) => {
        dispatch(addClub(clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKdc));
    }

    const handleSubmit = (event) => {
        if (clubTitle === "" || clubDescription === "" || bookTitle === "" || clubTime === null) {
            alert("모든 항목을 다 입력해주세요.");
        } else if (searchCheck === false) {
            alert("책 검색 플리즈");
        } else {
            onCreate(clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKdc);
            history.replace("/");
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
                            bookKdc={bookKdc} setBookKdc={setBookKdc}
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
        </div>
    )
}

export default ClubWrite
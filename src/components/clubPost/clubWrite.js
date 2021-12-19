import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import "./clubPost.css"

import { useDispatch } from 'react-redux';
import { postClub } from "../../actions/index";

const ClubWrite = (props) => {
    const [clubTitle, setClubTitle] = useState("");
    const [clubDescription, setClubDescription] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [clubTime, setClubTime] = useState(null);
    const [bookImage, setBookImage] = useState("");

    const dispatch = useDispatch();
  
    const onCreate = (clubTitle, clubDescription, bookTitle, clubTime, bookImage) => {
        dispatch(postClub(clubTitle, clubDescription, bookTitle, clubTime, bookImage));
    }

    const handleSubmit = (event) => {
        if (clubTitle === "" || clubDescription === "" || bookTitle === "" || clubTime === null) {
            alert("모든 항목을 다 입력해주세요.");
        } else if (bookImage === "") {
            alert("책 검색 플리즈");
        } else {
            onCreate(clubTitle, clubDescription, bookTitle, clubTime, bookImage);
            props.closePopup();
        }
    };


    return (
        <div className='popup'>
            <div className='popup-inner'>
                <CloseButton onClick={props.closePopup} style={{float:"right"}}></CloseButton>
                <Form style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 제목</Form.Label>
                        <Form.Control 
                            as="textarea" rows={1}
                            value={clubTitle}
                            onChange={e => setClubTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 소개</Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                            value={clubDescription}
                            onChange={e => setClubDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 도서</Form.Label>
                        <BookSearch 
                            bookTitle={bookTitle} setBookTitle={setBookTitle}
                            bookImage={bookImage} setBookImage={setBookImage}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 시간</Form.Label>
                        <ClubDate clubTime={clubTime} setClubTime={setClubTime}/>
                        </Form.Group>
                    <Button
                        variant="outline-secondary"
                        onClick={handleSubmit}
                    >Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default ClubWrite
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useSelector } from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import "./clubEdit.css"

import { useDispatch } from 'react-redux';
import { editClub } from "../../actions/index";

const EditForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const clubs = useSelector(state => state.clubs);

    const [newClubTitle, setNewClubTitle] = useState(clubs[id].clubTitle);
    const [newClubDescription, setNewClubDescription] = useState(clubs[id].clubDescription);
    const [newBookTitle, setNewBookTitle] = useState(clubs[id].bookTitle);
    const [newClubTime, setNewClubTime] = useState(clubs[id].clubTime);
    const [newBookImage, setNewBookImage] = useState(clubs[id].bookImage);
    const [newBookKdc, setNewBookKdc] = useState(clubs[id].bookKdc);
    const [newSearchCheck, setNewSearchCheck] = useState(true);

    const dispatch = useDispatch();

    const clickedEditBtn = () => {
        if (newClubTitle === "" || newClubDescription === "" || newBookTitle === "" || newClubTime === null) {
            alert("모든 항목을 다 입력해주세요.");
        } else if (newSearchCheck === false) {
            alert("책 검색 플리즈");
        } else {
            dispatch(editClub(id, newClubTitle, newClubDescription, newBookTitle, newClubTime, newBookImage, newBookKdc));
            history.replace("/detail/" + id);
        }
    }

    return (
        <div className='edit-form'>
            <Form style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 제목</Form.Label>
                        <Form.Control 
                            as="textarea" rows={1} className="system-font"
                            value={newClubTitle}
                            onChange={e => setNewClubTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 소개</Form.Label>
                        <Form.Control
                            as="textarea" rows={5} className="system-font"
                            value={newClubDescription}
                            onChange={e => setNewClubDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 도서</Form.Label>
                        <BookSearch 
                            bookTitle={newBookTitle} setBookTitle={setNewBookTitle}
                            bookImage={newBookImage} setBookImage={setNewBookImage}
                            bookKdc={newBookKdc} setBookKdc={setNewBookKdc}
                            searchCheck={newSearchCheck} setSearchCheck={setNewSearchCheck}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 시간</Form.Label>
                        <ClubDate clubTime={newClubTime} setClubTime={setNewClubTime}/>
                    </Form.Group>
                    <Button
                        variant="outline-secondary"
                        onClick={clickedEditBtn}
                    >Submit</Button>
                </Form>
        </div>
    )
}

export default EditForm
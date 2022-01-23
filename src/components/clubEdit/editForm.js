import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Cookies } from "react-cookie";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import Alert from "../clubPost/alert.js"
import "./clubEdit.css"

import { useDispatch } from 'react-redux';
import { editClub } from "../../actions/index";

const EditForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const clubs = useSelector(state => state.clubs);
    const cookiesUser = new Cookies().get('rememberUser');

    const [newClubTitle, setNewClubTitle] = useState(clubs[id].clubTitle);
    const [newClubDescription, setNewClubDescription] = useState(clubs[id].clubDescription);
    const [newBookTitle, setNewBookTitle] = useState(clubs[id].bookTitle);
    const [newClubTime, setNewClubTime] = useState(clubs[id].clubTime);
    const [newBookImage, setNewBookImage] = useState(clubs[id].bookImage);
    const [newBookKind, setNewBookKind] = useState(clubs[id].bookKind);
    const [newSearchCheck, setNewSearchCheck] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");

    const dispatch = useDispatch();

    const clickedEditBtn = () => {
        if (newClubTitle === "" || newClubDescription === "" || newBookTitle === "" || newClubTime === null) {
            setAlertMessage("모든 항목을 입력해주세요.");
        } else if (newSearchCheck === false) {
            setAlertMessage("책을 검색하여 선택해주세요.");
        } else {
            dispatch(editClub(id, newClubTitle, newClubDescription, newBookTitle, newClubTime, newBookImage, newBookKind, cookiesUser));
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
                            bookKind={newBookKind} setBookKind={setNewBookKind}
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
                        className="basic-button"
                    >Submit</Button>
                </Form>
                {alertMessage !== "" ? 
                    <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
                : null}
        </div>
    )
}

export default EditForm
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import "./clubEdit.css"

const EditForm = (props) => {
    const [newClubTitle, setNewClubTitle] = useState("");
    const [newClubContent, setNewClubContent] = useState("");
    const [newBookTitle, setNewBookTitle] = useState("");
    const [newClubTime, setNewClubTime] = useState(null);
    const [newBookImage, setNewBookImage] = useState("");

    return (
        <div className='edit-form'>
            <Form style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 제목</Form.Label>
                        <Form.Control 
                            as="textarea" rows={1}
                            value={newClubTitle}
                            onChange={e => setNewClubTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 소개</Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                            value={newClubContent}
                            onChange={e => setNewClubContent(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 도서</Form.Label>
                        <BookSearch 
                            bookTitle={newBookTitle} setBookTitle={setNewBookTitle}
                            bookImage={newBookImage} setBookImage={setNewBookImage}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>📚 독서토론회 시간</Form.Label>
                        <ClubDate clubTime={newClubTime} setClubTime={setNewClubTime}/>
                    </Form.Group>
                    <Button
                        variant="outline-secondary"
                    >Submit</Button>
                </Form>
        </div>
    )
}

export default EditForm
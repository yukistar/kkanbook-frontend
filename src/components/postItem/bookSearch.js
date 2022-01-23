import React, { useState } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./postItem.css"
import kakaoKey from "../../properties/kakaoKey";
import BookList from "./bookList";

const BookSearch = (props) => {
    const [showBookList, setShowBookList] = useState(false);
    const [searchBookList, setSearchBookList] = useState([]);

    const kakao = (keyword) => {
        return axios.create({
            baseURL: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: { Authorization: kakaoKey },
            params: { query: keyword }
        });
    }

    const handleKeyPress = e => { 
        if (e.key === 'Enter') {
            e.preventDefault(); //text에 엔터 막음
            bookSearch();
        }
    };

    async function bookSearch () {
        try {
            const kakaoRes = await kakao(props.bookTitle).get();
            const resList = []
            kakaoRes.data.documents.forEach((item) => {
                resList.push([item.title, item.authors[0], item.publisher, item.thumbnail])
            });
            setSearchBookList(resList);
        } catch (error) {
            console.log(error);
        }
        setShowBookList(true);
        props.setSearchCheck(true);
    }

    return (
        <div className="book-search">
            <InputGroup className="mb-3">
                <Form.Control
                    as="textarea" rows={1} className="system-font"
                    value={props.bookTitle}
                    onChange={e => {props.setBookTitle(e.target.value); props.setSearchCheck(false)}}
                    onKeyPress={handleKeyPress}
                />
                <Button 
                    variant="outline-secondary"
                    className="basic-button"
                    onClick={bookSearch}
                >Search</Button>
            </InputGroup>
            {showBookList ? 
                <BookList 
                    bookTitle={props.bookTitle} searchBookList={searchBookList}
                    setBookTitle={props.setBookTitle} 
                    setBookImage={props.setBookImage}
                    setBookKind={props.setBookKind}
                    setShowBookList={setShowBookList}
                /> 
                : null}
        </div>
    )
}

export default BookSearch
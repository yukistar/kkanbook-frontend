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
            for (let i = 0; i < kakaoRes.data.documents.length; i++) {
                resList.push([
                    kakaoRes.data.documents[i].title,
                    kakaoRes.data.documents[i].authors[0],
                    kakaoRes.data.documents[i].publisher,
                    kakaoRes.data.documents[i].thumbnail
                ])
            }
            setSearchBookList(resList);
        } catch (error) {
            console.log(error);
        }
        setShowBookList(true);
    }

    return (
        <div className="book-search">
            <InputGroup className="mb-3">
                <Form.Control
                    as="textarea" rows={1} className="system-font"
                    value={props.bookTitle}
                    onChange={e => props.setBookTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button 
                    variant="outline-secondary"
                    onClick={bookSearch}
                >Search</Button>
            </InputGroup>
            {showBookList ? 
                <BookList 
                    searchBookList={searchBookList}
                    setBookTitle={props.setBookTitle} 
                    setBookImage={props.setBookImage}
                    setBookKdc={props.setBookKdc}
                    setShowBookList={setShowBookList}
                /> 
                : null}
        </div>
    )
}

export default BookSearch
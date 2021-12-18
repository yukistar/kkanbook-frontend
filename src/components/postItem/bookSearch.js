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

    const search = (keyword) => {
        return axios.create({
            baseURL: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: { Authorization: kakaoKey },
            params: { query: keyword }
        });
    }

    async function bookSearch () {
        try {
            const res = await search(props.bookTitle).get();
            const resList = []
            for (let i = 0; i < res.data.documents.length; i++) {
                resList.push([
                    res.data.documents[i].title,
                    res.data.documents[i].authors[0],
                    res.data.documents[i].publisher,
                    res.data.documents[i].thumbnail
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
                    as="textarea" rows={1}
                    value={props.bookTitle}
                    onChange={e => props.setBookTitle(e.target.value)}
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
                    setShowBookList={setShowBookList}
                /> 
                : null}
        </div>
    )
}

export default BookSearch
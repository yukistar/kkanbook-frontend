import React, { useState, useEffect } from "react";
import axios from 'axios';
import kakaoKey from "../../properties/kakaoKey";
import "./clubDetail.css"

const ClubBook = (props) => {
    const [author, setAuthor] = useState("");
    const [datetime, setDatetime] = useState("");
    const [publisher, setPublisher] = useState("");
    const [url, setUrl] = useState("");

    const kakao = (keyword) => {
        return axios.create({
            baseURL: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: { Authorization: kakaoKey },
            params: { query: keyword }
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            const kakaoRes = await kakao(props.bookTitle).get();
            setAuthor(kakaoRes.data.documents[0].authors[0]);
            setDatetime(kakaoRes.data.documents[0].datetime.substr(0, 10));
            setPublisher(kakaoRes.data.documents[0].publisher);
            setUrl(kakaoRes.data.documents[0].url);
        };
        fetchData();
    }, [props.bookTitle]);

    return (
        <div className="club-book">
            <div className="club-book-box">
                <img 
                    className="detail-book-image" 
                    src={props.bookImage} 
                    alt="book"
                />
                <div style={{fontWeight: "600"}}>{props.bookTitle}</div>
                <div>{author} 저 | {publisher} | {datetime}</div>
                <div className="book-link">
                    이 책에 대해 더 자세히 알고 싶다면,<br/> <a href={url}>여기</a>를 클릭해주세요.
                </div>
            </div>
        </div>
    )
}


export default ClubBook
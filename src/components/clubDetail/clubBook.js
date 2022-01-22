import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Cookies } from "react-cookie";
import axios from 'axios';
import kakaoKey from "../../properties/kakaoKey";
import { useDispatch } from 'react-redux';
import { addParticipateClub, deleteParticipateClub } from "../../actions/index";

import Alert from "../clubPost/alert"
import styled from "@emotion/styled";
import "./clubDetail.css"

const Heart = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    float: right;
    &:before,
    &:after{
        position: absolute;
        content: "";
        left: 15px;
        width: 15px;
        height: 25px;
        background-color: ${props => (props.color)};
        -moz-border-radius: 50px 50px 0 0;
        border-radius: 50px 50px 0 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transition: background-color .1s linear;
        transition: background-color .1s linear;
    }
    &:after{
        left: 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 100% 100%;
        transform-origin :100% 100%;
    }
`;

const ClubBook = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [author, setAuthor] = useState("");
    const [datetime, setDatetime] = useState("");
    const [publisher, setPublisher] = useState("");
    const [url, setUrl] = useState("");

    const cookiesUser = new Cookies().get('rememberUser');
    const users = useSelector(state => state.users);

    const [alertMessage, setAlertMessage] = useState("");

    const clickedParticipateBtn = (e) => {
        if (cookiesUser !== undefined) {
            if (users[cookiesUser]["participateClubs"].includes(id)) {
                dispatch(deleteParticipateClub(cookiesUser, id));
                setAlertMessage("참여 취소가 완료되었습니다.");
            }
            else {
                dispatch(addParticipateClub(cookiesUser, id));
                setAlertMessage("참여 예약이 완료되었습니다.");
            }
        }
        else {
        }
        e.stopPropagation();
    }
    
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
                <div style={{position: "absolute", top:"10px", right: "15px"}}>
                {cookiesUser !== undefined ? 
                    users[cookiesUser]["participateClubs"].includes(id) ? 
                    <Heart color={"var(--main-color)"} onClick={clickedParticipateBtn}/> : 
                    <Heart color={"rgb(212, 211, 211)"} onClick={clickedParticipateBtn}/>
                : 
                    null}
                </div>
                <div>
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
            {alertMessage !== "" ? 
                <Alert showAlert={true} alertMessage={alertMessage} setAlertMessage={setAlertMessage} /> 
            : null}
        </div>
    )
}


export default ClubBook
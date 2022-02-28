import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { Cookies } from "react-cookie";
import ClubFrom from "../components/clubPost/clubForm";
import { useDispatch } from 'react-redux';
import { addClub } from "../actions/index";

const PostPage = () => {
    const history = useHistory();
    const cookiesUser = new Cookies().get('rememberUser');

    const [clubTitle, setClubTitle] = useState("");
    const [clubDescription, setClubDescription] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [clubTime, setClubTime] = useState(null);
    const [bookImage, setBookImage] = useState("");
    const [bookKind, setBookKind] = useState("");
    const [searchCheck, setSearchCheck] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const dispatch = useDispatch();
  
    const onCreate = (clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, clubCreator) => {
        dispatch(addClub(clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, clubCreator));
    }

    const handleSubmit = (event) => {
        if (clubTitle === "" || clubDescription === "" || bookTitle === "" || clubTime === null) {
            setAlertMessage("모든 항목을 입력해주세요.");
        } else if (searchCheck === false) {
            setAlertMessage("책을 검색하여 선택해주세요.");
        } else {
            onCreate(clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, cookiesUser);
            history.replace("/main");
        }
    };


    return (
        <div>
            <ClubFrom
                clubTitle={clubTitle} setClubTitle={setClubTitle}
                clubDescription={clubDescription} setClubDescription={setClubDescription}
                bookTitle={bookTitle} setBookTitle={setBookTitle}
                clubTime={clubTime} setClubTime={setClubTime}
                bookImage={bookImage} setBookImage={setBookImage}
                bookKind={bookKind} setBookKind={setBookKind}
                searchCheck={searchCheck} setSearchCheck={setSearchCheck}
                alertMessage={alertMessage} setAlertMessage={setAlertMessage}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default PostPage
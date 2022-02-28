import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Cookies } from "react-cookie";
import ClubFrom from "../components/clubPost/clubForm";
import { useDispatch } from 'react-redux';
import { editClub } from "../actions/index";

const EditPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const clubs = useSelector(state => state.clubs);
    const cookiesUser = new Cookies().get('rememberUser');

    const [clubTitle, setClubTitle] = useState(clubs[id].clubTitle);
    const [clubDescription, setClubDescription] = useState(clubs[id].clubDescription);
    const [bookTitle, setBookTitle] = useState(clubs[id].bookTitle);
    const [clubTime, setClubTime] = useState(clubs[id].clubTime);
    const [bookImage, setBookImage] = useState(clubs[id].bookImage);
    const [bookKind, setBookKind] = useState(clubs[id].bookKind);
    const [searchCheck, setSearchCheck] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (clubTitle === "" || clubDescription === "" || bookTitle === "" || clubTime === null) {
            setAlertMessage("모든 항목을 입력해주세요.");
        } else if (searchCheck === false) {
            setAlertMessage("책을 검색하여 선택해주세요.");
        } else {
            dispatch(editClub(id, clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKind, cookiesUser));
            history.replace("/detail/" + id);
        }
    }

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

export default EditPage
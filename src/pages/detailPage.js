import React from "react";
import { Cookies } from "react-cookie";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import ClubDetail from "../components/clubDetail/clubDetail";
import ClubDeleteBtn from "../components/detailItem/clubDeleteBtn";
import ClubEditBtn from "../components/detailItem/clubEditBtn";

const DetailPage = () => {
    const { id } = useParams();
    const clubs = useSelector(state => state.clubs);
    const cookiesUser = new Cookies().get('rememberUser');

    return (
        <div className="detail-page">
            <ClubDetail id={id} />
            {
            cookiesUser && clubs[id].clubCreator === cookiesUser ? 
                <>
                    <ClubDeleteBtn />
                    <ClubEditBtn />
                </>
            : null
            }

        </div>
    )
}

export default DetailPage
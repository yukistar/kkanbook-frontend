import React from "react";
import { useParams } from "react-router-dom"
import ClubDetail from "../components/clubDetail/clubDetail";
import ClubDeleteBtn from "../components/detailItem/clubDeleteBtn";
import ClubEditBtn from "../components/detailItem/clubEditBtn";
import ClubParticipateBtn from "../components/detailItem/clubParticipateBtn";

const DetailPage = () => {
    const { id } = useParams();
  
    return (
        <div className="detail-page">
            <ClubDetail id={id} />
            <ClubParticipateBtn />
            <ClubDeleteBtn />
            <ClubEditBtn />
        </div>
    )
}

export default DetailPage
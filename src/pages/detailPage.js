import React from "react";
import { useParams } from "react-router-dom"
import ClubDetail from "../components/clubDetail/clubDetail";

const DetailPage = () => {
    const { id } = useParams();
  
    return (
        <div className="detail-page">
            <ClubDetail id={id} />
        </div>
    )
}

export default DetailPage
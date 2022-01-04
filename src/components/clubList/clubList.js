import React from "react";
import ClubPost from "../clubPost/clubPost";
import ClubGrid from "./clubGrid"
import "./clubList.css"

import { useSelector } from 'react-redux';

const ClubList = (props) => {
    const clubs = useSelector(state => state.clubs);

    return (
        <div className="club-list">
            <ClubPost />
            <ClubGrid 
                clubs={clubs}
                pickedDays={props.pickedDays} pickedKdcs={props.pickedKdcs} searchKeyword={props.searchKeyword}
            />
        </div>
    )
}

export default ClubList
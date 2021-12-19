import React, { useState } from "react";
import ClubPost from "../clubPost/clubPost";
import ClubGrid from "./clubGrid"
import "./clubList.css"

import { useSelector } from 'react-redux';

const ClubList = (props) => {
    const clubs = useSelector(state => state.clubs);

    const [showPopup, setShowPopup] = useState(false);
    function togglePopup() {
        setShowPopup(!showPopup);
    }

    return (
        <div className="club-list">
            <ClubPost showPopup={showPopup} togglePopup={togglePopup}/>
            <ClubGrid clubs={clubs} />
        </div>
    )
}

export default ClubList
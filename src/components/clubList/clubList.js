import React, { useState } from "react";
import ClubPost from "../clubPost/clubPost";
import ClubGrid from "./clubGrid"
import "./clubList.css"

const ClubList = (props) => {
    const [clubLists, setClubLists] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    function createclub(club, e) {
        console.log(club); // error
        e.preventDefault();
        let clubArr = [...clubLists];
        clubArr.push(club);
        setClubLists(clubArr);
        // togglePopup()
    }

    function togglePopup() {
        setShowPopup(!showPopup);
    }

    return (
        <div className="club-list">
            <ClubPost showPopup={showPopup} togglePopup={togglePopup} clubLists={clubLists} createclub={createclub}/>
            <ClubGrid clubLists={clubLists} />
        </div>
    )
}

export default ClubList
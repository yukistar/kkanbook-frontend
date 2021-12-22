import React, { useState } from "react";
import ClubFilter from '../components/clubFilter/clubFilter'
import ClubList from "../components/clubList/clubList";

const MainPage = () => {
    const [pickedDays, setPickedDays] = useState(Array.from({length: 7}, () => true));
    return (
        <div className="main-page">
            <ClubFilter pickedDays={pickedDays} setPickedDays={setPickedDays} />
            <ClubList pickedDays={pickedDays} />
        </div>
    )
}

export default MainPage
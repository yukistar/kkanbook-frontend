import React from "react";
import ClubFilter from '../components/clubFilter/clubFilter'
import ClubList from "../components/clubList/clubList";

const MainPage = () => {
    return (
        <div className="main-page">
            <ClubFilter/>
            <ClubList />
        </div>
    )
}

export default MainPage
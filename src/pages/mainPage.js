import React, { useState } from "react";
import ClubFilter from '../components/clubFilter/clubFilter'
import ClubList from "../components/clubList/clubList";

const MainPage = () => {
    const [pickedDays, setPickedDays] = useState(Array.from({length: 7}, () => true));
    const [pickedKdcs, setPickedKdcs] = useState(Array.from({length: 10}, () => true));
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <div className="main-page">
            <ClubFilter 
                pickedDays={pickedDays} setPickedDays={setPickedDays}
                pickedKdcs={pickedKdcs} setPickedKdcs={setPickedKdcs}
                searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
            />
            <ClubList 
                pickedDays={pickedDays} pickedKdcs={pickedKdcs} searchKeyword={searchKeyword}
            />
        </div>
    )
}

export default MainPage
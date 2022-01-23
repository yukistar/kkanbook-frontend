import React, { useState } from "react";
import ClubFilter from '../components/clubFilter/clubFilter'
import ClubList from "../components/clubList/clubList";

const MainPage = () => {
    const [pickedDays, setPickedDays] = useState(Array.from({length: 7}, () => true));
    const [pickedKinds, setPickedKinds] = useState(Array.from({length: 10}, () => true));
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <div className="main-page">
            <ClubFilter 
                pickedDays={pickedDays} setPickedDays={setPickedDays}
                pickedKinds={pickedKinds} setPickedKinds={setPickedKinds}
                searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
            />
            <ClubList 
                pickedDays={pickedDays} pickedKinds={pickedKinds} searchKeyword={searchKeyword}
            />
        </div>
    )
}

export default MainPage
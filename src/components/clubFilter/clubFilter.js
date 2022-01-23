import React from "react";
import ClubSearch from "./clubSearch";
import ClubCondition from "./clubCondition";
import "./clubFilter.css"

const ClubFilter = (props) => {
    return (
        <div>
            <div className="club-filter">
                <ClubSearch 
                    searchKeyword={props.searchKeyword} setSearchKeyword={props.setSearchKeyword} 
                />
                <ClubCondition
                    pickedDays={props.pickedDays} setPickedDays={props.setPickedDays}
                    pickedKinds={props.pickedKinds} setPickedKinds={props.setPickedKinds}
                />
            </div>
        </div>
    )
}

export default ClubFilter
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
                    pickedKdcs={props.pickedKdcs} setPickedKdcs={props.setPickedKdcs}
                />
            </div>
        </div>
    )
}

export default ClubFilter
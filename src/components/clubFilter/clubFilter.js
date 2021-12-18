import React from "react";
import ClubSearch from "./clubSearch";
import ClubCondition from "./clubCondition";

import "./clubFilter.css"

const ClubFilter = () => {
    return (
        <div className="club-filter">
            <ClubSearch />
            <ClubCondition />
        </div>
    )
}

export default ClubFilter
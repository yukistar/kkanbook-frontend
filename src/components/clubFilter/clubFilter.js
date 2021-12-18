import React, { useState } from "react";
import ClubSearch from "./clubSearch";
import ClubCondition from "./clubCondition";
import ConditionList from "./conditionList";
import "./clubFilter.css"

const ClubFilter = () => {
    const [pickedDays, setPickedDays] = useState(Array.from({length: 7}, () => false));
    const [pickedConditions, setPickedConditions] = useState([]);

    return (
        <div>
            <div className="club-filter">
                <ClubSearch />
                <ClubCondition
                    pickedDays={pickedDays} setPickedDays={setPickedDays}
                    pickedConditions={pickedConditions} setPickedConditions={setPickedConditions}
                />
            </div>
            <ConditionList 
                pickedDays={pickedDays} setPickedDays={setPickedDays}
                pickedConditions={pickedConditions} setPickedConditions={setPickedConditions}
            />
        </div>
    )
}

export default ClubFilter
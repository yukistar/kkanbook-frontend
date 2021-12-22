import React, { useState } from "react";
import ClubSearch from "./clubSearch";
import ClubCondition from "./clubCondition";
import ConditionList from "./conditionList";
import "./clubFilter.css"

const ClubFilter = (props) => {
    const [pickedConditions, setPickedConditions] = useState([]);

    return (
        <div>
            <div className="club-filter">
                <ClubSearch />
                <ClubCondition
                    pickedDays={props.pickedDays} setPickedDays={props.setPickedDays}
                    pickedConditions={pickedConditions} setPickedConditions={setPickedConditions}
                />
            </div>
            <ConditionList 
                pickedDays={props.pickedDays} setPickedDays={props.setPickedDays}
                pickedConditions={pickedConditions} setPickedConditions={setPickedConditions}
            />
        </div>
    )
}

export default ClubFilter
import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

import "./clubFilter.css"

const ConditionList = (props) => {
    const conditionRemove = (i) => {
        let days = ["월", "화", "수", "목", "금", "토", "일"];

        let newPickedConditions = [...props.pickedConditions];
        let newPickedDays = [...props.pickedDays];
        newPickedDays[days.indexOf(props.pickedConditions[i])] = !newPickedDays[days.indexOf(props.pickedConditions[i])]
        newPickedConditions.splice(i, 1);
        props.setPickedDays(newPickedDays);
        props.setPickedConditions(newPickedConditions);
    }

    const coditionInit = () => {
        let cleanPickedDays = Array.from({length: 7}, () => false);
        let cleanPickedConditions = [];
        props.setPickedDays(cleanPickedDays);
        props.setPickedConditions(cleanPickedConditions);
    }

    return (
        <div className="condition-list">
            <div className="condition-init" onClick={(e) => {e.stopPropagation(); coditionInit();}}>
                <b>조건 초기화</b>
            </div>
            {props.pickedConditions && props.pickedConditions.map((item, i) => (
                <div key={i} style={{ display: "flex"}}>
                    {item}
                    <CloseButton 
                        style={{ marginLeft: "3px", marginRight: "15px"}}
                        onClick={(e) => {e.stopPropagation(); conditionRemove(i);}}        
                    />
                </div>
            ))}
        </div>
    )
}

export default ConditionList
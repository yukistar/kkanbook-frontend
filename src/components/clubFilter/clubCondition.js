import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GrPowerCycle } from 'react-icons/gr';
import "./clubFilter.css"

const ClubCondition = (props) => {
    const handleCheckDays = (e) => {
        let days = ["월", "화", "수", "목", "금", "토", "일"];
        let daysArr = [...props.pickedDays];
        daysArr[Number(e.target.id)] = !daysArr[Number(e.target.id)];
        props.setPickedDays(daysArr);

        let conditionsArr = [];
        for (let i = 0; i < 7; i++) {
            if (daysArr[i]) conditionsArr.push(days[i]);
        }
        props.setPickedConditions(conditionsArr);
    }

    const coditionInit = () => {
        let cleanPickedDays = Array.from({length: 7}, () => false);
        let cleanPickedConditions = [];
        props.setPickedDays(cleanPickedDays);
        props.setPickedConditions(cleanPickedConditions);
    }

    return (
        <div className="club-condition">
              <Dropdown as={ButtonGroup} size="sm">
                    <Dropdown.Toggle id="dropdown-title">요일 선택 </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-title">
                        <Form className="day-checkbox">
                            <Form.Check 
                                type='checkbox' id='0' label='월'
                                checked={props.pickedDays[0]}
                                onChange={handleCheckDays}
                            />
                            <Form.Check 
                                type='checkbox' id='1' label='화'
                                checked={props.pickedDays[1]}
                                onChange={handleCheckDays}
                            />
                            <Form.Check 
                                type='checkbox' id='2' label='수' 
                                checked={props.pickedDays[2]}
                                onChange={handleCheckDays}
                            />
                            <Form.Check 
                                type='checkbox' id='3' label='목' 
                                checked={props.pickedDays[3]}
                                onChange={handleCheckDays}
                            />
                            <Form.Check 
                                type='checkbox' id='4' label='금' 
                                checked={props.pickedDays[4]}
                                onChange={handleCheckDays}
                            />
                            <Form.Check 
                                type='checkbox' id='5' label='토' 
                                checked={props.pickedDays[5]}
                                onChange={handleCheckDays}
                            />
                            <Form.Check 
                                type='checkbox' id='6' label='일' 
                                checked={props.pickedDays[6]}
                                onChange={handleCheckDays}
                            />
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup} size="sm" style={{ paddingLeft: "10px" }}>
                    <Dropdown.Toggle id="dropdown-title">책 분류 선택 </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-title">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="condition-init" onClick={(e) => {e.stopPropagation(); coditionInit();}}>
                    <GrPowerCycle /> 조건 초기화
                </div>
        </div>
    )
}

export default ClubCondition
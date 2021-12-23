import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GrPowerCycle } from 'react-icons/gr';
import "./clubFilter.css"

const ClubCondition = (props) => {
    const handleCheckDays = (e) => {
        let daysArr = [...props.pickedDays];
        daysArr[Number(e.target.id)] = !daysArr[Number(e.target.id)];
        props.setPickedDays(daysArr);
    }

    const handleCheckKdcs = (e) => {
        let kdcsArr = [...props.pickedKdcs];
        kdcsArr[Number(e.target.id)] = !kdcsArr[Number(e.target.id)];
        props.setPickedKdcs(kdcsArr);
    }

    const coditionInit = () => {
        let cleanPickedDays = Array.from({length: 7}, () => true);
        let cleanPickedKdcs = Array.from({length: 10}, () => true);

        props.setPickedDays(cleanPickedDays);
        props.setPickedKdcs(cleanPickedKdcs);
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
                        <Form className="day-checkbox">
                            <Form.Check 
                                type='checkbox' id='0' label='총류'
                                checked={props.pickedKdcs[0]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='1' label='철학'
                                checked={props.pickedKdcs[1]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='2' label='종교'
                                checked={props.pickedKdcs[2]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='3' label='사회과학'
                                checked={props.pickedKdcs[3]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='4' label='순수과학'
                                checked={props.pickedKdcs[4]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='5' label='기술과학'
                                checked={props.pickedKdcs[5]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='6' label='예술'
                                checked={props.pickedKdcs[6]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='7' label='언어'
                                checked={props.pickedKdcs[7]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='8' label='문학'
                                checked={props.pickedKdcs[8]}
                                onChange={handleCheckKdcs}
                            />
                            <Form.Check 
                                type='checkbox' id='9' label='역사'
                                checked={props.pickedKdcs[9]}
                                onChange={handleCheckKdcs}
                            />
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="condition-init" onClick={(e) => {e.stopPropagation(); coditionInit();}}>
                    <GrPowerCycle /> 조건 초기화
                </div>
        </div>
    )
}

export default ClubCondition
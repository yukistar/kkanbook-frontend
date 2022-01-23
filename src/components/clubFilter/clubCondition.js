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

    const handleCheckKinds = (e) => {
        let KindsArr = [...props.pickedKinds];
        KindsArr[Number(e.target.id)] = !KindsArr[Number(e.target.id)];
        props.setPickedKinds(KindsArr);
    }

    const coditionInit = () => {
        let cleanPickedDays = Array.from({length: 7}, () => true);
        let cleanPickedKinds = Array.from({length: 11}, () => true);

        props.setPickedDays(cleanPickedDays);
        props.setPickedKinds(cleanPickedKinds);
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
                                checked={props.pickedKinds[0]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='1' label='철학'
                                checked={props.pickedKinds[1]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='2' label='종교'
                                checked={props.pickedKinds[2]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='3' label='사회과학'
                                checked={props.pickedKinds[3]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='4' label='순수과학'
                                checked={props.pickedKinds[4]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='5' label='기술과학'
                                checked={props.pickedKinds[5]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='6' label='예술'
                                checked={props.pickedKinds[6]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='7' label='언어'
                                checked={props.pickedKinds[7]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='8' label='문학'
                                checked={props.pickedKinds[8]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='9' label='역사'
                                checked={props.pickedKinds[9]}
                                onChange={handleCheckKinds}
                            />
                            <Form.Check 
                                type='checkbox' id='10' label='미분류'
                                checked={props.pickedKinds[10]}
                                onChange={handleCheckKinds}
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
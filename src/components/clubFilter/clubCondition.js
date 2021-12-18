import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./clubFilter.css"

const ClubCondition = (props) => {
    return (
        <div className="club-condition">
              <Dropdown as={ButtonGroup} size="sm">
                    <Dropdown.Toggle id="dropdown-title">요일 선택 </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-title">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup} size="sm" style={{ paddingLeft: "10px" }}>
                    <Dropdown.Toggle id="dropdown-title">책 분류 선택 </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-title">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}

export default ClubCondition
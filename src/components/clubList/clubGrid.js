import React from "react";
import ClubBox from "./clubBox";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./clubList.css"

const ClubList = (props) => {
    let days = ["월", "화", "수", "목", "금", "토", "일"];
    let kdcs = ["총류", "철학", "종교", "사회과학", "순수과학", "기술과학", "예술", "언어", "문학", "역사"];

    return (
        <div className="club-grid">
            <Container>
                <Row lg={4}>
                    {props.clubs && Object.entries(props.clubs).map(([key, value]) => (
                        props.pickedDays[days.indexOf(value.clubTime[12])] && props.pickedKdcs[kdcs.indexOf(value.bookKdc)]?
                        <Col key={key}>
                            <ClubBox 
                                clubId={key}
                                clubTitle={value.clubTitle}
                                clubDescription={value.clubDescription.length > 55 ? value.clubDescription.substring(0, 55) + "..." : value.clubDescription}
                                bookTitle={value.bookTitle}
                                clubTime={value.clubTime}
                                bookImage={value.bookImage}
                            />
                        </Col>
                        : null
                    ))}
                </Row>
            </Container>
        </div>
    )
}


export default ClubList
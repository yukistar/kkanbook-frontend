import React from "react";
import ClubBox from "./clubBox";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./clubList.css"

const ClubList = (props) => {
    return (
        <div className="club-grid">
            <Container>
                <Row lg={4}>
                    {props.clubs && Object.entries(props.clubs).map(([key, value]) => (
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
                    ))}
                </Row>
            </Container>
        </div>
    )
}


export default ClubList
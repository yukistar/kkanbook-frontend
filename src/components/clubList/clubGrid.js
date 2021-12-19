import React from "react";
import ClubBox from "./clubBox";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./clubList.css"

const ClubGrid = (props) => {
    return (
        <div className="club-grid">
            <Container>
                <Row lg={4}>
                    {props.clubs && props.clubs.map((item, i) => (
                            <Col key={i}>
                                <ClubBox 
                                    clubId={item.id}
                                    clubTitle={item.clubTitle}
                                    clubDescription={item.clubDescription.length > 55 ? item.clubDescription.substring(0, 55) + "..." : item.clubDescription}
                                    bookTitle={item.bookTitle}
                                    clubTime={item.clubTime}
                                    bookImage={item.bookImage}
                                />
                            </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}


export default ClubGrid
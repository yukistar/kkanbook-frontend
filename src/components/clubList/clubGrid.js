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
                    {props.clubLists && props.clubLists.map((item, i) => (
                            <Col key={i}>
                                <ClubBox 
                                    clubId={i}
                                    clubTitle={item[0]}
                                    clubDescription={item[1].length > 55 ? item[1].substring(0, 55) + "..." : item[1]}
                                    bookTitle={item[2]}
                                    clubTime={item[3]}
                                    bookImage={item[4]}
                                />
                            </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}


export default ClubList
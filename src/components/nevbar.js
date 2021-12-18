import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./component.css"

const Nevbar = () => {
    return (
        <div className="nevbar">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="">KKAN BOOK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="post">클럽 목록</Nav.Link>
                            <Nav.Link href="#link">마이페이지</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nevbar
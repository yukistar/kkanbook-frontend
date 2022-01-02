import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./component.css";

const Nav = styled.nav`
  position: fixed;
  top: 0; right: 0; left: 0;
  z-index: 1;
  opacity: ${props => (props.isScroll ? "0.7" : "1")};
  backdrop-filter: blur(30px);
  top: 0;
  padding: 0 20px;
  background: #1c2022;
  display: flex;
  align-items: center;
  height: 40px;
  transition: all 0.2s ease-in-out;
`;

const Logo = styled.h1`
  position:absolute;
  font-size: 25px;
  color: white;
  margin-top: 7px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 15px;
  margin: 0 auto;
  padding: 0px 20px 0px 20px;

  li {
    margin: 0px 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  position:absolute;
  right:5px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.toggle ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; right: 0; left: 0;
  top: 40px;
  z-index: 1;
  opacity: ${props => (props.isScroll ? "0.7" : "1")};
  backdrop-filter: blur(30px);
  height: ${props => (props.toggle ? "60px" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: all 0.2s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);

  li {
    margin-top: 5px;
    opacity: ${props => (props.toggle ? 1 : 0)};
    transition: opacity 0.4s ease-in-out;
  }
`;

const Navbar = () => {
    const [toggle, toggleNav] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = useCallback(() => {
      if (window.pageYOffset > 0) {
        setIsScroll(true);
      }
      if (window.pageYOffset === 0) {
        setIsScroll(false);
      }
    }, []);
  
    useEffect(() => {
      window.addEventListener('mousewheel', handleScroll);
      return () => {
        window.removeEventListener('mousewheel', handleScroll);
      };
    }, [handleScroll]);

    return (
        <div style={{marginBottom:"40px"}}>
            <Nav isScroll={isScroll}>
                <Logo>KKAN BOOK</Logo>
                <Menu>
                    <Item>
                        <Link className="link-custom" to="/">클럽 목록</Link>
                    </Item>
                    <Item>
                        <Link className="link-custom" to="/signin">마이페이지</Link>
                    </Item>
                </Menu>
                <NavIcon onClick={() => toggleNav(!toggle)}>
                    <Line toggle={toggle} />
                    <Line toggle={toggle} />
                    <Line toggle={toggle} />
                </NavIcon>
            </Nav>
            <Overlay toggle={toggle} isScroll={isScroll}>
                <OverlayMenu toggle={toggle}>
                    <Item>
                        <Link className="link-custom" to="/">클럽 목록</Link>
                    </Item>
                    <Item>
                        <Link className="link-custom" to="/signin">마이페이지</Link>
                    </Item>
                </OverlayMenu>
            </Overlay>
        </div>
    );
};

export default Navbar;
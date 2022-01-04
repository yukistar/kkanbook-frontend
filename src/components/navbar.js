import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./component.css";

const Nav = styled.nav`
  position: fixed;
  top: 0; right: 0; left: 0;
  z-index: 1;
  opacity: ${props => (props.isScroll ? "0.7" : "1")};
  backdrop-filter: blur(30px);
  padding: 30px 20px 15px;
  background: white;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 40px;
  transition: all 0.2s ease-in-out;
`;

const Logo = styled.div`
  position:absolute;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 800;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
  padding: 0px 20px 0px 20px;

  li {
    margin: 0px 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  :nth-child(1) {
    .link-custom {
      color: ${props => (props.menuFocus === 1 ? "var(--main-color)" : "black")};
    }
  }
  :nth-child(2) {
    .link-custom {
      color: ${props => (props.menuFocus === 2 ? "var(--main-color)" : "black")};
    }
  }
  :nth-child(3) {
    .link-custom {
      color: ${props => (props.menuFocus === 3 ? "var(--main-color)" : "black")};
    }
  }
  :nth-child(4) {
    .link-custom {
      color: ${props => (props.menuFocus === 4 ? "var(--main-color)" : "black")};
    }
  }
`;

const Auth = styled.div`
  position:absolute;
  right: 0;
  margin: 0 auto;
  padding: 0px 20px 0px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

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
  background-color: var(--main-color);
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.toggle ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 45px; right: 0; left: 0;
  z-index: 1;
  opacity: ${props => (props.isScroll ? "0.7" : "1")};
  backdrop-filter: blur(30px);
  height: ${props => (props.toggle ? "130px" : 0)};
  width: 100vw;
  background: white;
  transition: all 0.2s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);

  li {
    margin-top: 5px;
    opacity: ${props => (props.toggle ? 1 : 0)};
    transition: opacity 0.4s ease-in-out;
  }
`;

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [menuFocus, setMenuFocus] = useState(0);
  
    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.pageYOffset > 0 ? 
        setIsScroll(true) : setIsScroll(false)
      });
    }, [isScroll]);

    return (
        <div style={{marginBottom:"45px"}}>
            <Nav isScroll={isScroll}>
                <Logo>KKAN BOOK</Logo>
                <Menu>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(1)}>
                        <Link className="link-custom" to="/">모든 클럽 보기</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(2)}>
                        <Link className="link-custom" to="/signin">참여 예정 클럽</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(3)}>
                        <Link className="link-custom" to="/signin">마이 페이지</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(4)}>
                      <Auth>
                        <Link className="link-custom" to="/signin">로그인</Link>
                      </Auth>
                    </Item>
                </Menu>
                <NavIcon onClick={() => setToggle(!toggle)}>
                    <Line toggle={toggle} />
                    <Line toggle={toggle} />
                    <Line toggle={toggle} />
                </NavIcon>
            </Nav>
            <Overlay toggle={toggle} isScroll={isScroll}>
                <OverlayMenu toggle={toggle}>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(1); setToggle(!toggle)}}>
                        <Link className="link-custom" to="/">모든 클럽 보기</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(2); setToggle(!toggle)}}>
                        <Link className="link-custom" to="/signin">참여 예정 클럽</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(3); setToggle(!toggle)}}>
                        <Link className="link-custom" to="/signin">마이 페이지</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(4); setToggle(!toggle)}}>
                      <Link className="link-custom" to="/signin">로그인</Link>
                    </Item>
                </OverlayMenu>
            </Overlay>
        </div>
    );
};

export default Navbar;
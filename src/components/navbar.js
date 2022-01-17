import React, { useEffect, useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { Cookies } from "react-cookie";

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
  :nth-of-type(1) {
    .link-custom {
      color: ${props => (props.menuFocus === 1 ? "var(--main-color)" : "black")};
    }
  }
  :nth-of-type(2) {
    .link-custom {
      color: ${props => (props.menuFocus === 2 ? "var(--main-color)" : "black")};
    }
  }
  :nth-of-type(3) {
    .link-custom {
      color: ${props => (props.menuFocus === 3 ? "var(--main-color)" : "black")};
    }
  }
  :nth-of-type(4) {
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

  :nth-of-type(2) {
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
    const cookies = new Cookies();
    const cookiesUser = new Cookies().get('rememberUser');
    const history = useHistory();
    const [toggle, setToggle] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [menuFocus, setMenuFocus] = useState(0);

    const handleScroll = useCallback(() => {
      window.pageYOffset > 0 ? setIsScroll(true) : setIsScroll(false)
    }, []);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [handleScroll]);

    useEffect(() => { // 나중에 더 추가해
      if (history.location.pathname === "/main") { setMenuFocus(1); }
      else if (history.location.pathname === "/myclub") { setMenuFocus(2); }
    }, [history.location.pathname]);

    useEffect(() => {
      cookiesUser ? setIsLogin(true) : setIsLogin(false);
    }, [cookiesUser]);

    const goIntro = (e) => {
      history.replace("/");
      setMenuFocus(0);
      e.stopPropagation();
    }

    const handleSignout = (e) => {
      console.log("ddd");
      cookies.remove('rememberUser', { path: '/' });
      history.go(0);
      e.stopPropagation();
    }

    return (
        <div style={{marginBottom:"45px"}}>
            <Nav isScroll={isScroll}>
                <Logo onClick={goIntro}>KKAN BOOK</Logo>
                <Menu>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(1)}>
                        <Link className="link-custom" to="/main">모든 클럽 보기</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(2)}>
                        <Link className="link-custom" to="/myclub">참여 예정 클럽</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(3)}>
                        <Link className="link-custom" to="/signin">마이 페이지</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => setMenuFocus(4)}>
                      <Auth>
                        {isLogin ? 
                          (<div className="link-custom" onClick={handleSignout}>로그아웃</div>) :
                          (<Link className="link-custom" 
                            to={{pathname: '/signin', state: {history: history.location.pathname}}}>
                            로그인</Link>)
                        }
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
                        <Link className="link-custom" to="/main">모든 클럽 보기</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(2); setToggle(!toggle)}}>
                        <Link className="link-custom" to="/myclub">참여 예정 클럽</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(3); setToggle(!toggle)}}>
                        <Link className="link-custom" to="/signin">마이 페이지</Link>
                    </Item>
                    <Item menuFocus={menuFocus} onClick={() => {setMenuFocus(4); setToggle(!toggle)}}>
                        {isLogin ? 
                          (<div className="link-custom" onClick={handleSignout}>로그아웃</div>) :
                          (<Link className="link-custom" 
                            to={{pathname: '/signin', state: {history: history.location.pathname}}}>
                            로그인</Link>)
                        }
                    </Item>
                </OverlayMenu>
            </Overlay>
        </div>
    );
};

export default Navbar;
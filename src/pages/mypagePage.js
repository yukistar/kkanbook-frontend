import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { Cookies } from "react-cookie";
import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const MpWrap = styled.div`
    width: 100%;
    padding: 10px;
`;

const Mp = styled.div`
    margin-top: 20px;
    display: flex;
    margin-left: 15px;
`;

const Name = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 5px;
`;

const Coment = styled.div`
    font-size: 1.1rem;
    padding-top: 7px;
`;

const SubComent = styled.div`
    margin-left: 15px;
    font-size: 0.9rem;
`;

const PersonalInform = styled.div`
    margin-top: 10px;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgba(187, 187, 187, 0.384);
`;

const FlexBooks = styled.div`
    display: flex;
    padding-top: 30px;
    padding-left: 20px; padding-right: 15px;
    flex-wrap: wrap;
    background: repeating-linear-gradient(white, white 180px, #8c6b18 180px, #8c6b18 190px);
`;

const Book = styled.div`
    vertical-align: middle;
    background: rgba(calc(233 + ${props => (props.color)}), calc(72 + ${props => (props.color)}), calc(131 + ${props => (props.color)}));
    writing-mode: vertical-rl;
    margin-right: 3px; margin-bottom: 40px;
    border-radius: 5px;
    width: ${props => (props.width)}px;
    min-width: 30px;
    padding-top: 5px;
    height: 150px;
    transform: rotate(-${props => (props.index === 0 ? "0" : props.rotate)}deg);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    &:hover {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
    }
}
`;

const MypagePage = () => {
    const booksArr = ["펭귄이 귀여워", "하이하이", "하이하이", "책 제목 제목", "펭귄이 귀여워", "하이하이", "책 제목 제목", "펭귄이 귀여워", "하이하이", "책 제목 제목", "펭귄이 귀여워", "하이하이", "책 제목 제목"];

    const cookiesUser = new Cookies().get('rememberUser');
    const history = useHistory();
    const users = useSelector(state => state.users);

    const [userName, setUserName] = useState("");

    useEffect(() => {
        if (cookiesUser === undefined) {
            history.push({pathname: "/signin", state: {history: history.location.pathname}});
        }
    }, [cookiesUser, history]);

    return (
        <MpWrap>
            {cookiesUser ? <div style={{margin: "0 auto", maxWidth: "800px"}}>
                <Mp>
                    <Name>{users[cookiesUser]["userName"]}</Name>
                    <Coment>님의 마이페이지</Coment>
                </Mp>
                <PersonalInform>
                    <InputGroup className="mb-3">
                    <Form.Control
                        rows={1} className="system-font"
                        placeholder={users[cookiesUser]["userName"]}
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <Button 
                        variant="outline-secondary"
                        className="basic-button"
                    >이름 변경</Button>

                    </InputGroup>
                    <InputGroup className="mb-3">
                    <Form.Control
                        rows={1} className="system-font"
                        placeholder={users[cookiesUser]["userName"]}
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <Button 
                        variant="outline-secondary"
                        className="basic-button"
                    >비번 변경</Button>
                    </InputGroup>
                </PersonalInform>
                <Mp>
                    <Name>{users[cookiesUser]["userName"]}</Name>
                    <Coment>님의 책장</Coment>
                </Mp>
                <SubComent>
                    책장은 {users[cookiesUser]["userName"]}님이 그동안 참여했던 클럽들의 책 이력을 기록한 것입니다.<br/>
                    클럽에 참여해서 {users[cookiesUser]["userName"]}님의 책장을 채워주세요!
                </SubComent>
                <FlexBooks>
                    {
                        booksArr.map((book, index) =>
                            <Book
                                key={index}
                                index={index}
                                rotate={Math.floor((Math.random() * 10) + 0)}
                                color={Math.floor((Math.random() * 150) + 0)}
                                width={Math.floor((Math.random() * 31) + 30)}
                            >{book}</Book>
                        )
                    }
                </FlexBooks>
            </div>: 
                null}
        </MpWrap>
    )
}

export default MypagePage
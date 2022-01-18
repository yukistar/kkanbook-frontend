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

const Bookshelf = styled.div`
    display: flex;
    margin-top: 10px;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid rgba(187, 187, 187, 0.384);
`;

const Book = styled.div`
    padding: 5px;
`;

const MypagePage = () => {
    const books = ["http://cdn.news.unn.net/news/photo/202009/234418_119853_441.jpg", "http://cdn.news.unn.net/news/photo/202009/234418_119853_441.jpg", "http://cdn.news.unn.net/news/photo/202009/234418_119853_441.jpg", "http://cdn.news.unn.net/news/photo/202009/234418_119853_441.jpg"];

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
                <SubComent>책장은 {users[cookiesUser]["userName"]}님이 그동안 참여했던 클럽들의 책 이력을 기록한 것입니다.</SubComent>
                <Bookshelf>
                    {
                        books.map((book) => 
                            <Book key={book}>
                                <img src={book} alt="img" style={{width: "120px"}}/>
                            </Book>
                        )
                    }
                </Bookshelf>
            </div>: 
                null}
        </MpWrap>
    )
}

export default MypagePage
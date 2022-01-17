import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { Cookies } from "react-cookie";
import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import ClubGrid from "../components/clubList/clubGrid";

const Participate = styled.div`
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

const MyclubPage = () => {
    const [pickedDays] = useState(Array.from({length: 7}, () => true));
    const [pickedKdcs] = useState(Array.from({length: 10}, () => true));
    const [searchKeyword] = useState("");
    const [myParticipateClbs, setMyParticipateClubs] = useState({});

    const cookiesUser = new Cookies().get('rememberUser');
    const users = useSelector(state => state.users);
    const clubs = useSelector(state => state.clubs);
    const history = useHistory();

    const myClbs = {}

    useEffect(() => {
        if (cookiesUser === undefined) {
            history.push({pathname: "/signin", state: {history: history.location.pathname}});
        }
    }, [cookiesUser, history]);
    
    useEffect(() => {
        if (cookiesUser !== undefined) {
            for (let key in clubs) {
                if (users[cookiesUser]["participateClubs"].includes(key)) {
                    myClbs[key] = clubs[key];
                }
            }
            setMyParticipateClubs(myClbs);
        }
    }, [users, cookiesUser]);


    return (
        <div className="club-list" style={{marginTop: "50px"}}>
            {cookiesUser ? 
                (<Participate>
                    <Name>{users[cookiesUser]["userName"]}</Name>
                    <Coment>님의 참여 예정 클럽은 아래와 같습니다.</Coment>
                </Participate>)
            : 
                null}
            <ClubGrid 
                clubs={myParticipateClbs}
                pickedDays={pickedDays} pickedKdcs={pickedKdcs} searchKeyword={searchKeyword}
            />
        </div>
    )
}

export default MyclubPage
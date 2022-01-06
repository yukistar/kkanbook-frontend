import React from "react";
import styled from "@emotion/styled";
import useScrollFadeIn from "../hooks/useScrollFadeIn"

const Background = styled.div`
    section {
        height: 100%;
        width: 100%;
        display: flex;
        margin-bottom: 20px;
    }
`;

const KKANBOOK = styled.div`
    // background: no-repeat center/cover url("https://images2.alphacoders.com/261/thumb-1920-26102.jpg");
    // color: white;
    width: 100%;
    height: 94vh;
    padding-left: 10%;
    padding-top: 150px;
`;

const KkanLogo = styled.div`
    font-size: 100px;
    margin-bottom: 20px;
    -webkit-animation: fadein 2s;
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
`;

const KkanDescription = styled.div`
    font-size: 20px;
    -webkit-animation: fadein 2s;
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
`;

const Features = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const ItemBox = styled.li`
    width: 380px;
    padding: 3rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(187, 187, 187, 0.384);
`;

const ItemTitle = styled.h4`
    margin-bottom: 2rem;
`;

const ItemDescription = styled.p`
    margin-bottom: 1.5rem;
`;

const SERVICES_ITEMS = [
    {
        title: '읽고, 대화하고, 친해져요',
        description: '좋은 건 나누면 배가 된대요. 내가 좋아하는 책을 다른 사람들과 함께 나누며 이야기해요.'
    },
    {
        title: '간편한 클럽 참여',
        description: '진입 장벽이 높은 대면 모임이 아닌 채팅을 통해 원하는 클럽에 참여할 수 있어요. 현재 만들어져 있는 시작 예정 클럽들 보러 가실까요?'
    },
    {
        title: '누구나 될 수 있는 클럽장',
        description: '클럽에 참여해서 일정 점수를 얻으면 누구나 쉽게 클럽장이 되어 원하는 클럽을 만들 수 있어요. 그럼, 얼른 참여하러 가볼까요?'
    },
];

const IntroPage = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3)
    };

    return (
        <Background>
            <section>
                <KKANBOOK>
                    <KkanLogo>KKAN BOOK</KkanLogo>
                    <KkanDescription>
                        깐북은 책을 나누는 친구 사이를 만들어주는 독서모임 커뮤니티입니다. <br/>
                        독서 후의 감상을 당신의 깐부와 함께 공유해보세요!
                    </KkanDescription >
                </KKANBOOK>
            </section>
            <section>
                <Features>
                {SERVICES_ITEMS.map((item, index) => (
                    <ItemBox key={item.title} {...animatedItem[index]}>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>

                    </ItemBox>
                ))}
                </Features>
            </section>
        </Background>
    )
}

export default IntroPage
import React from "react";
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

import ClubBook from "./clubBook";
import "./clubDetail.css"

const ClubDetail = (props) => {
    return (
        <div className="col">
            <div className="club-detail row">
                <div className="detail-club-title">체험독서-바다</div>
                <div className="detail-club-description">
                    [체험독서]는 함께 책을 읽고, 책을 읽으며 떠오른 일들을 직접 해보는 클럽입니다. 한 권의 책을 읽고도 책 속 주인공이 사랑한 술을 마셔보거나, 소설의 배경이 된 동네에 직접 가본다거나, 함께 할 수 있는 체험이 너무도 많아요! 해보고 싶었지만, 혼자라서 쉽게 시도하지 못했던 것들도 함께라면 할 수 있답니다.<br/>
                    우리가 번개에서 어떤 활동을 함께할지는 책을 읽고 난 후, 멤버들과 함께 정해나갈 거예요. 나는 어떤 일들을 해보고 싶은지를 생각하면서 책을 읽는다는 건 독서 경험의 폭을 넓힐 수 있는, 즐겁고도 의미 있는 일이랍니다 🥰<br/>
                    트레바리 [체험독서]에서 매달 새로운 책을 읽으며, 새로운 일을 함께 경험해봐요!<br/>
                    * [체험독서] 클럽주제는 트레바리 멤버 강대혁 님의 제안을 바탕으로 만들어진 클럽입니다.<br/>
                </div>
                <div className="detail-book-title"><FaBook /> 내가 사랑한 화가들</div>
                <div className="detail-club-time"><FaCalendarAlt /> 1.2 (일) 18:30 ~ 21:30</div>
            </div>

            <ClubBook />
        </div>
    )
}


export default ClubDetail
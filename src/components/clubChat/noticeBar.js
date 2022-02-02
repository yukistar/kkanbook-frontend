import React, { useState } from "react";
import './clubChat.css'
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const NoticeInput = styled.textarea`
    background-color: transparent;
    border: none;
    width: ${props => (props.noticeBtn ? "calc(100% - 50px)" : "100%")};
    height: 40px;
    overflow-y: hidden;
    ::placeholder {
        color: black;
        text-align: center;
        text-size: 15px;
    }
`;

const NoticeBar = (props) => {
  const [noticeBtn, setNoticeBtn] = useState(false);
  const closeNoticeBtn = () => setNoticeBtn(false);
  const showNoticeBtn = () => setNoticeBtn(true);

  return (
    <div className="notice-bar">
        <NoticeInput
            value={props.notice} noticeBtn={noticeBtn} placeholder="공지사항을 등록해보세요!"
            onChange={(event) => {props.setNotice(event.target.value); showNoticeBtn();}}
        />
        {noticeBtn?
            <Button 
                variant="outline-secondary" size="sm" className="basic-button"
                onClick={(event) => {props.sendNotice(event); closeNoticeBtn();}}
                style={{position: "absolute", top:"8px"}}
            >등록</Button>   
        :null
        }
    </div>
  )
}

export default NoticeBar
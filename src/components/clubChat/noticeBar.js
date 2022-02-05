import React, { useState } from "react";
import './clubChat.css'
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";
import { HiSpeakerphone } from 'react-icons/hi';

const NoticeInput = styled.textarea`
    background-color: transparent;
    border: none;
    width: ${props => (props.noticeBtn ? "calc(100% - 50px)" : "99%")};
    resize: vertical;
    min-height: 40px;
    max-height: 500px;
    margin-bottom: -6px;
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
        <div style={{float: "left"}}>
            <HiSpeakerphone size="33" style={{position: "relative", top:"6px"}} />
        </div>
        <div style={{width: "calc(100% - 40px)" , float: "right"}}>
            <NoticeInput contentEditable
                value={props.notice} noticeBtn={noticeBtn} placeholder="공지사항을 등록해보세요!"
                onChange={(event) => {props.setNotice(event.target.value); showNoticeBtn();}}
            />
        {noticeBtn?
            <Button 
                variant="outline-secondary" size="sm" className="basic-button"
                onClick={(event) => {props.sendNotice(event); closeNoticeBtn();}}
                style={{position: "absolute", top:"6px"}}
            >등록</Button>   
        :null
        }
        </div>
    </div>
  )
}

export default NoticeBar
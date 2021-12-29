import React, { useState }  from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";
import { getYear, getMonth, getDate, getDay, getHours, getMinutes, getTime } from "date-fns";
import "./postItem.css"

const ClubDate = (props) => {
    const [clubDate, setClubDate] = useState(null);

    function seletTime(date) {
        let Days = ['일', '월', '화', '수', '목', '금', '토'];
        let Year = getYear(date);
        let Month = String(getMonth(date) + 1).length === 2 ? String(getMonth(date) + 1) : "0" + String(getMonth(date) + 1);
        let Date = String(getDate(date)).length === 2 ? String(getDate(date)) : "0" + String(getDate(date));
        let Day = Days[getDay(date)];
        let Hour = String(getHours(date)).length === 2 ? String(getHours(date)) : "0" + String(getHours(date));
        let Minute = getMinutes(date) === 0 ? "00" : "30";
        // 오브젝트는 전달 안돼서 string으로 변환
        props.setClubTime(String(Year + "." + Month + "." + Date + " (" + Day + ") " + Hour + ":" + Minute))
    }

    return (
        <div className="club-date">
            <DatePicker
                locale={ko}
                dateFormat="yyyy.MM.dd (eee) h:mm aa"
                showPopperArrow={false}
                minDate={new Date()}
                closeOnScroll={true}
                placeholderText={props.clubTime}
                selected={clubDate}
                onChange={(date) => {setClubDate(date); seletTime(date);}}
                customInput={<Form.Control className="system-font" as="textarea" rows={1} style={{width:"250px"}}/>}
                dayClassName={(d) =>
                    getDate(d) === getDate(clubDate) && getMonth(d) === getMonth(clubDate)
                        ? 'normal-day selected-day'
                        : 'normal-day'
                }
                showTimeSelect={true}
                timeClassName={(t) => 
                    getTime(t) === getTime(clubDate)
                        ? 'normal-time selected-time'
                        : 'normal-time'
                }
            />
        </div>
    )
}

export default ClubDate

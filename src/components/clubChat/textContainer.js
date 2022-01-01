import './clubChat.css'
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

const TextContainer = (props) => {
  return (
    <div className="text-container">
    <div className="book-inform">
      <img alt="bookImage" src={props.bookImage} />
      <div className="chat-inform"><FaBook /> {props.bookTitle}</div>
      <div className="chat-inform"><FaCalendarAlt /> {props.clubTime}</div>
    </div>
    <hr />
    {props.users ? (
      <div style={{paddingLeft: "30px", paddingTop: "10px"}}>
        <h5>현재 접속자</h5>
        <div className="active-container">
          {props.users.map(({ name }) => (
            <div key={name} className="active-item">
              {name}
            </div>
            ))}
        </div>
      </div>
    ) : null}
  </div>
  )
}

export default TextContainer

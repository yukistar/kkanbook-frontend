import './clubChat.css'
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

const TextContainer = (props) => {
  return (
    <div className="text-container">
      <div className="book-inform">
        <img alt="bookImage" className="chat-book-img" src={props.bookImage} />
        <div className="chat-inform"><FaBook /> {props.bookTitle}</div>
        <div className="chat-inform"><FaCalendarAlt /> {props.clubTime}</div>
      </div>
      <hr />
    {props.users ? (
      <div style={{paddingLeft: "15px", paddingTop: "20px", overflow: "auto"}}>
        <div className="active-container">
          {props.users.map(({ name }) => (
            <div key={name} className="active-item">
              {name} 
              {
                props.cookiesUser && props.cookiesUser === props.clubCreator ?  
                <div className="club-creator">클럽장</div>
                : null 
              }
            </div>
            ))}
        </div>
      </div>
    ) : null}
  </div>
  )
}

export default TextContainer

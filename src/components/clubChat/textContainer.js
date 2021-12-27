import './clubChat.css'
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

const TextContainer = ({ users }) => (
  <div className="text-container">
    <div className="book-inform">
      <img alt="bookImage" src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5607042%3Ftimestamp%3D20211218153531" />
      <div className="chat-inform"><FaBook /> 자본주의 대전환</div>
      <div className="chat-inform"><FaCalendarAlt /> 2021.12.23 (목) 11:30</div>
    </div>
    <hr />
    {users ? (
      <div style={{paddingLeft: "30px", paddingTop: "10px"}}>
        <h5>현재 접속자</h5>
        <div className="active-container">
          {users.map(({ name }) => (
            <div key={name} className="active-item">
              {name}
            </div>
            ))}
        </div>
      </div>
    ) : null}
  </div>
)

export default TextContainer

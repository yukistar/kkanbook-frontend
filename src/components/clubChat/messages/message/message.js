import { useHistory } from "react-router-dom"
import './message.css'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from 'react-redux';
import { addBookshelf } from "../../../../actions/index";

const Message = ({ message: { user, text }, name, cookiesUser, bookTitle }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let isSentByCurrentUser = false;

  const clickedClearRoom = (e) => {
    history.replace("/main");
    dispatch(addBookshelf(cookiesUser, bookTitle));
  }

  const trimName = name.trim().toLowerCase()

  if (user === trimName) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="sent-text pr-10">{trimName}</p>
      <div className="message-box background-blue">
        <div className="message-text">
          {text}
        </div>
      </div>
    </div>
  ) : (
    user === "admin" ? (
      text === "채팅이 종료되었습니다" ?
        <Modal dialogClassName='custom-dialog' show={true}>
          <Modal.Body className="modal-text">클럽장에 의해 채팅이 종료되었습니다.</Modal.Body>
          <div style={{margin: "0 auto", marginTop: "-15px", marginBottom: "15px"}}>
            <Button className="delete-custom" onClick={clickedClearRoom}>확인</Button>
          </div>
        </Modal>
      :    
        <div className="message-text admin-text color-white">
          {text}
        </div> 
    )
    :
    <div className="message-container justify-start">
      <div className="message-box background-light">
        <div className="message-text color-dark">
          {text}
        </div>
      </div>
      <p className="sent-text pl-10">{user}</p>
    </div>
  )
}

export default Message

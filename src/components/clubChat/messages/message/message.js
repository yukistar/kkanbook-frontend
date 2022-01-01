import './message.css'

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false

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
    user === "admin" ?
    <div className="message-text admin-text">
      {text}
    </div> 
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

import './clubChat.css'

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <textarea
      className="input system-font"
      type="text"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <button
      className="send-button"
      onClick={(event) => sendMessage(event)}
    >
      전송
    </button>
  </form>
)

export default Input

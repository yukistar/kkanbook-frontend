import './messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message/message'
import NoticeBar from '../noticeBar'

const Messages = ({ messages, name, notice, setNotice, sendNotice, cookiesUser, bookTitle }) => (
  <ScrollToBottom className="messages">
    <NoticeBar notice={notice} setNotice={setNotice} sendNotice={sendNotice} />
    <br/><br/>
    {messages.map((message, index) => (
      <div key={index}>
        <Message message={message} name={name} cookiesUser={cookiesUser} bookTitle={bookTitle}/>
      </div>
    ))}
  </ScrollToBottom>
)

export default Messages

import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { socket } from '../properties/socket'
import { Cookies } from "react-cookie";

import InfoBar from '../components/clubChat/infoBar'
import Input from '../components/clubChat/input'
import Messages from '../components/clubChat/messages/messages'
import TextContainer from '../components/clubChat/textContainer'

import '../components/clubChat/clubChat.css'

const ChatPage = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState(location.state.clubTitle)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState('');
  const cookiesUser = new Cookies().get('rememberUser');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })

    return () => {
      socket.disconnect()
      socket.off()
    }
  }, [location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message])
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () =>
        setMessage('')
      )
    }
    setMessage('')
  }

  const clear = () => {
    if (room) {
      socket.emit('clearRoom', room, () =>
      clear('')
      )
    }
  }

  return (
    <div className="container-wrapper">
      <div className="chat-container">
        <InfoBar
          room={room} 
          clubId={location.state.clubId}
          clubCreator={location.state.clubCreator}
          cookiesUser={cookiesUser}
          clear={clear}
        />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer
        cookiesUser={cookiesUser}
        users={users}
        bookImage={location.state.bookImage}
        bookTitle={location.state.bookTitle}
        clubTime={location.state.clubTime}
        clubCreator={location.state.clubCreator}
      />
    </div>
  )
}

export default ChatPage

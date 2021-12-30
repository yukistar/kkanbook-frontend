import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { socket } from '../properties/socket'

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

  return (
    <div className="container-wrapper">
      <div className="chat-container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer 
        users={users}
        bookImage={location.state.bookImage}
        bookTitle={location.state.bookTitle}
        clubTime={location.state.clubTime}
      />
    </div>
  )
}

export default ChatPage

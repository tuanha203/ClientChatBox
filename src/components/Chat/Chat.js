import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Infor from '../Infor/Infor';
import './Chat.css';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
let socket;

function Chat(props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [usersInRoom, setUsersInRoom] = useState([]);
  const URL = 'https://backendchatwebsite.herokuapp.com/';
  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);
    setName(name);
    setRoom(room);

    socket = io(URL, { transports: ['websocket', 'polling', 'flashsocket'] });

    socket.emit('join', { name, room }, ({ error }) => {
      if (error) alert(error);
      props.history.push('/');
    });

    return () => {
      socket.off();
    };
  }, [props.location.search, URL]);

  useEffect(() => {
    socket.on('message', ({ user, text }) => {
      setMessages([...messages, { user, text }]);
    });

    socket.on('getUsersInRoom', (dataUsers) => {
        dataUsers = dataUsers.filter((user) => user.name !== name)
        setUsersInRoom(dataUsers)
    });

    return () => {
      socket.off();
    };
  }, [messages, message]);

  

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message, () => {
      setMessage('');
    });
  };

  const disconnectServer = () => {
    socket.emit('disconnectServer');
  };

  return (
    <div className="chatOuterContainer">
      <div className="chatInnerContainer">
        <Infor roomName={room} disconnectServer={disconnectServer} />
        <Messages messages={messages} nameCurrent={name} />
        <Input
          setMessage={setMessage}
          message={message}
          sendMessage={sendMessage}
        />
      </div>
      <div className="descriptionRoomChat">
        <h3>Current users in room: </h3>
        <ul className="listUsersInRoom">
          {usersInRoom.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chat;

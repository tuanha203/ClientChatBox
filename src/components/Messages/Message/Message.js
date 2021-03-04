import React from 'react';
function Message({ message: { user, text }, nameCurrent }) {
  let isOtherSend;

  nameCurrent = nameCurrent.trim().toLowerCase();
  nameCurrent === user ? (isOtherSend = false) : (isOtherSend = true);

  let isAdmin = (user === 'admin' ? true : false)

 

  return isOtherSend ? (
    <div className={isAdmin ? "messageContainer other admin" : "messageContainer other"}>
      <div className={text.includes(' ') ? "message" : "message noSpace"}>{text}</div>
      <div className="name">{user}</div>
    </div>
  ) : (
    <div className="messageContainer">
      <div className={text.includes(' ') ? "message" : "message noSpace"}>{text}</div>
      <div className="name">{user}</div>
    </div>
  );
}

export default Message;

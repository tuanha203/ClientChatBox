import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import { Link } from 'react-router-dom';
import './Infor.css';
function Infor(props) {
  return (
    <div className="inforChatBox">
      <img className="onlineIcon" src={onlineIcon} alt="" />
      <h3 className="nameRoom">{props.roomName}</h3>
      <Link className="closeIcon" to="/" onClick={() => props.disconnectServer()}>
        <img  src={closeIcon} alt="" />
      </Link>
    </div>
  );
}

export default Infor;

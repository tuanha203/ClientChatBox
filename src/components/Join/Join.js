import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
import './Join.css'

function Join(props) {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Manners Man</h1>
                <input type="text" placeholder="Name..." className="joinInput mt-3" value={name} onChange={(e) => setName(e.target.value)}  onKeyPress={(e) => e.key === 'Enter' && name !== '' && room !== '' ? props.history.push(`/chat?name=${name}&room=${room}`) : null} />
                <input type="text" placeholder="Room..." className="joinInput mt-1" value={room} onChange={(e) => setRoom(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && name !== '' && room !== '' ? props.history.push(`/chat?name=${name}&room=${room}`) : null} />
                <Link to={`/chat?name=${name}&room=${room}`} onClick={(e) => {
                    if (name === '' || room === '') e.preventDefault()
                }}>
                    <button className="button mt-1">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;
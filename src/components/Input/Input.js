import React, { useEffect, useRef, useState } from 'react';
import './Input.css';
import Picker from 'emoji-picker-react';
import Emoji from '../../icons/emoji.png'
function Input({ message, setMessage, sendMessage }) {
  let inputRef = useRef('');
  let pickerRef = useRef(null)
  const [isPickerOn, setIsPickerOn] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setMessage((message) =>
      emojiObject.emoji ? message + emojiObject.emoji : message
    );
  };

  useEffect(() => {
    inputRef.current.focus();
    
    const handleClickOutSide = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)){
        setIsPickerOn(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutSide)

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }

  }, [inputRef, pickerRef]);

  return (
    <div className="inputInnerContainer">
      <input
        className="inputMessage"
        ref={inputRef}
        type="text"
        placeholder="type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) =>
          e.key === 'Enter' && message !== '' ? sendMessage(e) : null
        }
      />
      
      <div className="pickerWrap">
      <img src={Emoji} className="picker" onClick={() => setIsPickerOn(!isPickerOn)} />
      </div>
      <div className="wrapPicker">
      {isPickerOn ? (
        <div ref={pickerRef}>
          <Picker
            
            disableSkinTonePicker={true}
            disableSearchBar={true}
            onEmojiClick={onEmojiClick}
          />
          </div>
        ) : null}
       
      </div>  
      <button
        onClick={(e) => (message !== '' ? sendMessage(e) : null)}
        className="sendMessage"
      >
        Send
      </button>
    </div>
  );
}

export default Input;

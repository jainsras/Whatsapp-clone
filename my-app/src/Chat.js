import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';
function Chat() {
    const [state, setstate] = useState('');
    const [input, setinput] = useState('');
    const {roomId} = useParams();
    const [roomName, setroomName] = useState('');
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                setroomName(snapshot.data().name)
            ))

        }
        
    }, [roomId]);
    useEffect(() => {
        setstate(Math.floor(Math.random()*5000));
        
    }, [roomId]);
    const sendMessage = (e) =>{
        e.preventDefault();
        console.log('you typed>>>>', input);
        setinput('');

    };
    return (
        <div className='chat'>
            <div className='chat__header'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${state}.svg`}/>
            <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
                <p>last seen at...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                <SearchOutlined />
                </IconButton>
                <IconButton>
                <AttachFile/>
                </IconButton>
                <IconButton>
                <MoreVert />
                </IconButton>
            </div>
            </div>
            <div className='chat__body'>
                <p className={`chat__msg ${true && "chat__receiver"}`}>
                    <span className='chat__name'>Ayushi</span>
                    hello guys
                    <span className='chat__timestamp'>10:41am</span></p>
                
            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setinput(e.target.value)} placeholder="Type a message" type="text"></input>
                    <button onClick={sendMessage} type='submit'>
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat;

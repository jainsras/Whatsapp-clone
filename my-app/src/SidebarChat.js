import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import './SidebarChat.css';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {

    const [state, setstate] = useState('');
    useEffect(() => {
        setstate(Math.floor(Math.random()*5000));
        
    }, []);
    const createChat= () => {
        const roomName= prompt("Please enter name for chat room");
        if(roomName)
        {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${state}.svg`}/>
            <div className='sidebarChat__info'>
                <h2>
                    {name}
                </h2>
                <p>last message</p>
            </div>
        </div>
        </Link>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat

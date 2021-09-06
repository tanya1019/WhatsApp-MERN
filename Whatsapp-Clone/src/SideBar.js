import React from 'react'
import './SideBar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton,Avatar} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
function SideBar(){
    return(
    
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg'/>
                <div className='sidebar__headerRight'>
                    <IconButton style = {{color: 'gray'}}>
                    <DonutLargeIcon/>
                    </IconButton >
                    <IconButton style = {{color:'gray'}}>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton style = {{color:'gray'}}>
                    <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined/>
                    <input placeholder='Search or start new chat' type='text'/>
                </div>
            </div>
            <div className="sidebar__chats">
       <SidebarChat/>
       <SidebarChat/>
       <SidebarChat/>
      </div>
        </div>
       

    )
}
export default SideBar;

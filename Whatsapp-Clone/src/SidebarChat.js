import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
function SidebarChat() {
  return (
    <div className="sidebarChat">
     
      <div className="sidebarChat__avatar">
        <Avatar/>
      </div>

      <div className="sidebarchat__info">
          <text className="sidebar__message1">Room Name</text>
          <text className="sidebar__message2">This is the last message</text>
      </div>

    </div>
   
  );
}

export default SidebarChat;
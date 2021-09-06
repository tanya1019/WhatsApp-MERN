import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  SettingsInputAntenna,
} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src='https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg'/>

        <div className="chat__headerinfo">
          <h3 style={{ color: "#d4cccc" }}>Tanya Thakur</h3>
          <p>Last seen Friday</p>
        </div>
        <div className="chat__headerRight">
          <IconButton style={{ color: "#B1B3B5" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton style={{ color: "#B1B3B5" }}>
            <AttachFile />
          </IconButton>
          <IconButton style={{ color: "#B1B3B5" }}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Tanya</span>
          This is a new messege
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className=" chat__message chat__reciever">
          <span className="chat__name">Tanya</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message..." type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}
export default Chat;
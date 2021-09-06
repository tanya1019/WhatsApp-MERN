import logo from "./logo.svg";
import "./App.css";
import styles, { Background, Title, Image, Input } from "./styles";
import redblue from "./assets/redblue.jpg";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
     <div className = "app__body">
       <SideBar/>
       <Chat/>
     </div>
    </div>
  );
}

export default App;

/*
<div className="App">
      <Background>
        <Title>Hello World</Title>
        <img src={redblue} alt="this is an image" className="Image"></img>
      </Background>
    </div>
*/

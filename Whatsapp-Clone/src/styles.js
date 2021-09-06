import styled from "styled-components";
import redblue from "./assets/redblue.jpg";

const Background = styled.div`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  &:: after {
    content: "";
    background-image: url("https://wallpapercave.com/wp/wp2708234.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 70vw;
    height: 70vh;
    position: absolute;
    filter: blur(0.5em);
    overflow: hidden;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: rgba(250, 250, 250, 1);
  z-index: 5;
  font-family: "Californian FB";
`;

const Image = styled.img`
  height:50vh,
  width:50vw
  src = redblue
`;

const Input = styled.input`
  width: 30vw;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  border: 0px;
  padding-left: 15px;
  color: blue;
  font-size: 1rem;
`;
export { Background, Title, Image, Input };

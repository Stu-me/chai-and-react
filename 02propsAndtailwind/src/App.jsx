import { useState } from "react";
import "./App.css";
import Card from "../components/card";

function App() {
  const [count, setCount] = useState(0);

  // sending values from one component to another first one was onject other was array 
  let objectOut = {
    username:"hitesh",
    age:21
  }
  let newArr = [12,121,43,4,'sundram',23];
  return (
    <>
      <h1 className ="text-3xl font-bold underline bg-red-400 mb-5">Tailwind Test</h1>
      {/* <Card name="Shaheenshah" howToSendObj = {objectOut} array = {newArr}></Card><br /> */}
      <Card name= "siffat" intro="she fell in love with the boy who is on generational run"></Card><br />
      <Card name="sundram" intro="he fell in love with the girl who was hard to be loved"></Card><br /> 
    </>
  );
}

export default App;

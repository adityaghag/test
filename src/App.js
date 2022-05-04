import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [text1, setText1] = useState("");

  const [count2, setCount2] = useState(0);
  const [text2, setText2] = useState("");

  function handleChange(event) {
    if (event.target.name === "first") {
      setText1(event.target.value);
      setCount1(event.target.value.length);
    } else {
      setText2(event.target.value);
      setCount2(event.target.value.length);
    }
  }

  function checkvalues() {
    if (text1 === text2) {
      alert("Values are same");
    } else {
      alert("Values are diff");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="textarea" name="first" onChange={handleChange}></input>
        <lable>Word count : {count1}</lable>
        <input type="textarea" name="sec" onChange={handleChange}></input>
        <lable>Word count : {count2}</lable>
        <button onClick={checkvalues}>check text</button>
      </header>
    </div>
  );
}

export default App;

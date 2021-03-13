import React, { useState } from "react";

function App() {
 
var [initColor,setColorfn]=useState("white")


 function Over() {

  setColorfn("Black")
 }

 function Out()
 {
 setColorfn("white")
 }
 
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:initColor}} onMouseOver={Over} onMouseOut={Out}>Submit</button>
    </div>
  );
}

export default App;

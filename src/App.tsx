import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';

function App() {
  const [msg,setMsg]=useState<Boolean>(false);
  const onClick=()=>{
    setMsg(true);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={onClick}>OnClickButton</button>
      {msg && <Registration/>}
    </div>
  );
}

export default App;

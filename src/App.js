import React,{useState} from "react";
import './App.css';

const App = () => {

// const state = useState();
//console.log(state);

const [count,setCount] = useState(0);

  const IncNum = () => {
    setCount(count+1);
    // console.log('clicked'+count++);
  }
  const DecNum = () => {
    setCount(count-1);
    // console.log('clicked'+count-1);
  }

  return (
   <div className = "App">
     <h2>React Count</h2>
   <h1> {count} </h1>
    <button onClick = {IncNum}> Increment</button>
    <button  onClick = {DecNum}> Decrement</button> 
   </div>
  )
}

export default App;

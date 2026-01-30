import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let addValue=()=>{
    if(count<20){
      setCount(count+1);
    }
  }
  let reduceValue=()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  return (
    <>
      <h1> Value: {count}</h1>
      <button onClick={addValue}> Add value: {count} </button><br/>
      <button onClick={reduceValue}> Reduce value: {count} </button>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Button from './Components/Button'

function App() {
  const handleClick =()=>{
    alert("are you ok")
  }

const className = {
  color: "red",
  background: "green",
  padding: "10px"
}

  return (
    <>
    <Button name="hello from b" onClick={handleClick}  className={className}/>
        
    </>
  )
}

export default App

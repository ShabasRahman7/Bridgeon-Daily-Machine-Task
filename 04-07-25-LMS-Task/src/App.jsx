import React,{ useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] =useState(true)

  const changeColor = () => {
    setColor(!color)
  }

  document.body.style.backgroundColor = color ? 'white' : 'black'
  return (
    <div>
      <button onClick={changeColor}>Switch Theme</button>
    </div>
  )
}

export default App

import React, { useState,useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container } from 'react-bootstrap';

function App() {

  const [task, setTask] = useState([]);
  const [inputs, setInput] = useState("");

  const handleAddTask = () => {
    if (inputs.trim()) {
      setTask([...task, inputs.trim()])
      setInput("")
    }
  }
  const handleDelete = (index)=>{
    let newTasks= task.filter((e,i)=>i!=index)
    setTask(newTasks)
  }

  useEffect(() => {
  console.log(task);
  
}, [task]);


  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your Task Name"
          value={inputs}
          onChange={(e) => { setInput(e.target.value) }}
        />
        <Button variant="secondary" onClick={handleAddTask}>Add task</Button>
      </div>

      <div className="task-list">
        <ul style={{display:task.length==0?"hidden":""}}>
          {task.map((element, index) => (
            <li key={index}>
              <p>{element}</p> <Button variant="danger" onClick={()=> handleDelete(index)}> Delete</Button>
            </li>
          ))}
        </ul>

      </div>


    </>
  )
}

export default App;
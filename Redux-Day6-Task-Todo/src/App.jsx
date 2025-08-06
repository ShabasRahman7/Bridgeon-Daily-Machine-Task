import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask } from './features/todos/todoSlice';
import { selectTodoList } from './features/todos/selectors';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodoList);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (input.trim()) {
      if (editIndex !== null) {
        dispatch(editTask({ id: editIndex, newText: input.trim() }));
        setEditIndex(null);
      } else {
        dispatch(addTask(input.trim()));
      }
      setInput('');
    }
  };

  const handleEdit = (task) => {
    setInput(task.text);
    setEditIndex(task.id);
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Navbar.Brand>Todo App</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your Task Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="secondary" onClick={handleAddTask}>
          {editIndex ? 'Update Task' : 'Add Task'}
        </Button>
      </div>

      <div className="task-list">
        <ul style={{ display: todos.length === 0 ? 'hidden' : '' }}>
          {todos.map((task) => (
            <li key={task.id}>
              <p>{task.text}</p>
              <Button variant="warning" onClick={() => handleEdit(task)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

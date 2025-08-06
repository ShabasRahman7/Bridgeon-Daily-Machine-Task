import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  const name = useSelector(state => state.user.name);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

      <h2>Name: {name}</h2>
      <button onClick={() => dispatch({ type: 'SET_NAME', payload: 'John' })}>
        Set Name
      </button>
    </div>
  );
}

export default App;

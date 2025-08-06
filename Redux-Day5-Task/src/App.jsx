import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './store/actions';

function App() {
  const { loading, data, error } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './redux/slices/fetchSlice';

function App() {

  const { data, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
     <div>
      <h1>Users</h1>
      {loading&&<p>Loading</p>}
      {error&&<p>Error:{error}</p>}
      {data&&data.length > 0 && (
        <ul>
          {data.map((u) => (
            <li key={u.id}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
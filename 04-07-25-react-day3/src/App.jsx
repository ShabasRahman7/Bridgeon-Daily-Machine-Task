import './App.css'
import React,{useState} from 'react'
import UserCard from './UserCard';

function App() {
  const [user, setUser] = useState(
    {
      name : "John",
      age : 20
    }
  );

  const updateUser = () => {
    setUser(
      {
        name:user.name,
        age: user.age+1
      }
    )
  };

  return(
    <div>
      <h1>User Info</h1>
      <UserCard user={user} onUpdateUser={updateUser} />

    </div>
  )
}
export default App

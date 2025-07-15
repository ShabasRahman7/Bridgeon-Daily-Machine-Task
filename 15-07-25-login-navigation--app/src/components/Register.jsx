import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ username, password }));
    navigate('/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <form  onSubmit={handleRegister}>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        Password:
        <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit" >Register</button>
        <br />
        <br />
      </form>
      <button onClick={() => navigate("/login")}>
        Already Have an Account - Login
      </button>
    </div>
  );
}

export default Register;

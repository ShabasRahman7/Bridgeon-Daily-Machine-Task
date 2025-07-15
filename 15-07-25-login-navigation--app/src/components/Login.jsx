import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const storeduser = JSON.parse(localStorage.getItem('user'));

    if (
      storeduser &&
      storeduser.username === storeduser.username &&
      storeduser.password === storeduser.password
    ) {
      login(username);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        Username:
        <input type="name" onChange={(e) => setPassword(e.target.value)} />
        <br />
        Password:
        <input type="password" onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
      </form>
      <button onClick={() => navigate("/register")}>
        New User - Create Account
      </button>
    </div>
  );
}

export default Login;

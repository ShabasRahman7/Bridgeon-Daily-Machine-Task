import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { AuthProvier } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvier>
       <App />
    </AuthProvier>
    </BrowserRouter>
  </StrictMode>,
)

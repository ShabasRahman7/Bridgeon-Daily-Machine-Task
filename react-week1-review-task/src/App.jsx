import { useEffect,useState } from 'react'
import './App.css'
import Card from './Card.jsx'
function App() {

  let url="https://jsonplaceholder.typicode.com/users";
  const [values,setValues] = useState([])
  useEffect(()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>setValues(data))
  },[])

  return (
    <>
     <Card datas={values}/>
    </>
  )
}

export default App;

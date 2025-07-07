import React,{useEffect} from 'react'
import Card from './Card.jsx'
function Dashboard() {

  useEffect(()=>{
    console.log("Card Mounted");
  
    return(()=>{
      console.log("Card unmounted")
    })
  },[])

  return (
    <Card>
        <p>It is a card children</p>
    </Card>
  )
}

export default Dashboard;
import React, {useEffect} from 'react'

function Card(props) {

  useEffect(()=>{
    console.log("Dashboard Mounted");
  
    return(()=>{
      console.log("Dashboard unmounted")
    })
  },[])

  return (
    <>
      <h1>{props.children}</h1>
    </>
  );
}

export default Card
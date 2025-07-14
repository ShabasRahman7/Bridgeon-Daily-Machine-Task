import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate();
    const styles={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5rem"
    }
  return <div style={styles}>
    <Button variant="light" onClick={()=> navigate('/create')}>Create Blog</Button>
  </div>;
}

export default Home;

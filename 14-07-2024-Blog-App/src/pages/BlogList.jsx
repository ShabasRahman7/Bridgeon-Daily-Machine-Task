import React from 'react'
import { useNavigate } from 'react-router-dom'

function BlogList({blog}) {
  const navigate = useNavigate();

  const NavigateBlog = (id)=>{
    navigate(`/view-blog/${id}`)
  }

  const div_style={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"1rem",
    marginLeft:"0px"
  }
  const ul_style={
    listStyle:"none",
    padding:"0px",
    margin:"0px"
  }
  const li_style={
    backgroundColor:"grey",
    paddingLeft:"10px",
    color:"white",
    width:"90vw",
    cursor:"pointer",
    margin:"0px",
    padding:"0px",
    marginTop:"1rem",
  }
  if(blog.length<1){
    return <h2 style={{textAlign:"center"}}>Blog List is Empty</h2>
  }
  return (
    <div style={div_style}>
      <ul style={ul_style}>
        {blog.map((element)=>{
          return <li style={li_style} key={element.id} onClick={()=>NavigateBlog(element.id)}>{element.id}:  {element.title}</li>
        })}
      </ul>
      <p style={{marginTop:"10rem",color:"grey"}}>Click On The Navbar Title to go back to <b>Home</b> </p>
    </div>
  )
}

export default BlogList
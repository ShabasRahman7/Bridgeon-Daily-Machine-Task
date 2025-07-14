import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreateBlog({blog,SetBlog,id,SetId}) {
  const div_style ={
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
  const navigat=useNavigate();

  const[title,SetTitle] = useState('');
  const [desc,SetDesc] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    const new_blog ={
      id : id,
      title: title,
      description: desc
    }
    SetBlog([...blog,new_blog]);
    SetId((curr)=>curr+1);

    console.log(blog)
    navigat('/blog-list');
  }

  return (
    <div style={div_style}>
      <Form>
        <h1 style={{textAlign:"center",marginTop:"3rem"}}>Create Blog</h1><br/>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label>Blog Ttle</Form.Label>
        <Form.Control type="text" placeholder="Enter Blog Title" onChange={(e)=>SetTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupDesc">
        <Form.Label>Blog Description</Form.Label>
        <Form.Control type="text" placeholder="Type Your Blog" onChange={(e)=>SetDesc(e.target.value)}/>
      </Form.Group>
      <Button variant='danger' type='submit' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateBlog
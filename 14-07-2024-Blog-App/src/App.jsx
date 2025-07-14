import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container,Nav } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  const [blog, SetBlog] = useState([]);
  const [id, SetId] = useState(1);
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Blog App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/create">
                Create Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/blog-list">
                Blog List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={
            <CreateBlog blog={blog} SetBlog={SetBlog} id={id} SetId={SetId} />
          }
        />
        <Route path="/blog-list" element={<BlogList blog={blog} />} />
        <Route path="/view-blog/:id" element={<Blog blog={blog} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

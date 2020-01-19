import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap'
import { BrowserRouter  , Switch, Route } from 'react-router-dom'
import Form1 from "./components/Form"
export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
          {/* <Navbar.Brand href="#home">
      <img
        src=""
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
      />
          </Navbar.Brand> */}

    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/form">Forms</Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/register">Register</Nav.Link>

      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <BrowserRouter> 
<Switch>
<Route  path="/form" component={Form1} />

</Switch>
</BrowserRouter> 
      </div>
    )
  }
}

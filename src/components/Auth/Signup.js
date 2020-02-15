import React, { useState, Component } from 'react';
import './signup.css';
import { Form, FormGroup, Label, Input, Button, Jumbotron, Row, Col } from 'reactstrap';

function Signup(props) {

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/api/user/createuser', {
      method: 'POST',
      body: JSON.stringify(
        {
          user: {
            username: username,
            password: password
          }
        }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(res => res.json())
      .then(user => props.updateToken(user.sessionToken))
  }



  return (
    <div>
      <Jumbotron className='element'>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input onChange={(e) => { setUsername(e.target.value) }} placeholder="Username must be a valid email address" name="username" value={username} type='email' required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input onChange={(e) => { setPassword(e.target.value) }} placeholder="Password must be at least 5 characters long " value={password} type="password" name="password" minLength='5' required />
          </FormGroup>
          <Button type="submit">Signup</Button>
        </Form>
        </Col>
        </Row>
      </Jumbotron>
    </div>
  )
}

export default Signup
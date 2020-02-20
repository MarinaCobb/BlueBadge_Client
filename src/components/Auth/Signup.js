import React, { useState, Component } from 'react';
import './signup.css';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import APIURL from "../../helpers/environment"

function Signup(props) {

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${APIURL}/api/user/createuser`, {
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
    <div className="login-page">
      <Container
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input onChange={(e) => { setUsername(e.target.value) }} placeholder="must be a valid email" name="username" value={username} type='email' required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input onChange={(e) => { setPassword(e.target.value) }} placeholder="must be at least 5 characters" value={password} type="password" name="password" minLength='5' required />
          </FormGroup>
          <Button type="submit" outline color="danger">Signup</Button>
        </Form>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
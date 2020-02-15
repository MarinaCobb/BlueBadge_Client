import React, { useState } from 'react';
import './login.css';
import { Form, FormGroup, Label, Input, Button, Jumbotron, Row, Col } from 'reactstrap';

function Login(props) {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:4000/api/user/signin', {
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
        })
            .then(res => res.json())
            .then(user => props.updateToken(user.sessionToken))
    }
    return (
        <div>
            <Jumbotron> 
                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username" className='UN'>Username</Label>
                        <Input onChange={(e) => { setUsername(e.target.value) }} placeholder="username" name="username" value={username} type='email' required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input onChange={(e) => { setPassword(e.target.value) }} placeholder="password " value={password} type="password" required name="password" />
                    </FormGroup>
                    <Button type="submit" outline color="danger">Login</Button>
                </Form>
                </Col>
                </Row> 
            </Jumbotron>
        </div>
    )
}
export default Login
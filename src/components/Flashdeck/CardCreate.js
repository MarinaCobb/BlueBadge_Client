import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import "./cardcreate.css";
import APIURL from "../../helpers/environment"

const CardCreate = (props) => {
    let [concept, setConcept] = useState('')
    let [definition, setDefinition] = useState('')
    let [example, setExample] = useState('') 

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${APIURL}/api/card/create`, {
        method: 'POST',
        headers: new Headers({
            "Content-Type" : "application/json",
            Authorization : props.token
        }),
        body: JSON.stringify(
        {
          card: {
            concept: concept,
            definition: definition,
            example: example
          }
        }),
    }).then(res => res.json())
      .then(cardData => {
          console.log(cardData)
          setConcept('')
          setExample('')
          setDefinition('')
          props.fetchCards()
      })
    }

    return (
        <>
        <Container>
            <br/>
        <h3>Create a Flash Card</h3>
        <br/>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="concept"> Concept </Label>
                <Input onChange={(e) => {setConcept(e.target.value) }} name="concept" value={concept} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="definition"> Definition </Label>
                <Input onChange={(e) => {setDefinition(e.target.value) }} name="definition" value={definition}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="example"> Example </Label>
                <Input onChange={(e) => {setExample(e.target.value) }} name="example" value={example} />
            </FormGroup>
            <Button type="submit" outline color="info">Click to Submit</Button>
        </Form>
        </Container>
    </>
    )
}

export default CardCreate;
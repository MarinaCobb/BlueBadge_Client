import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import APIURL from "../../helpers/environment"
import "./cardEdit.css";


const CardEdit = props => {
  const [editConcept, setEditConcept] = useState(props.cardToUpdate.concept);
  const [editDef, setEditDef] = useState(props.cardToUpdate.definition);
  const [editExample, setEditExample] = useState(props.cardToUpdate.example);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    buttonLabel,
    className
  } = props;

  const cardUpdate = (event, card) => {
    event.preventDefault();
    fetch(`${APIURL}/api/card/update/${props.cardToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        card: {
          concept: editConcept,
          definition: editDef,
          example: editExample
        }
      }),
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: props.token
      })
    }).then(res => {
      props.fetchCards();
      props.updateOff();
    });
  };

  return (
    <div>
    <Modal isOpen={true}>
      <ModalHeader>Update Flash Card</ModalHeader>
      <ModalBody>
        <Form onSubmit={cardUpdate} className="edit-form" style={{
        boxShadow: "none",
        marginTop: "0"
      }}>
          <FormGroup>
            <Label htmlFor="example">Edit Example:</Label>
            <Input
              name="example"
              value={editExample}
              onChange={e => setEditExample(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="concept">Edit Concept:</Label>
            <Input
              name="concept"
              value={editConcept}
              onChange={e => setEditConcept(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="definition">Edit Definition:</Label>
            <Input
              name="definition"
              value={editDef}
              onChange={e => setEditDef(e.target.value)}
            ></Input>
          </FormGroup>
          <br />
          <Button type="submit" outline color="info">Update or Cancel</Button>
        </Form>
      </ModalBody>
    </Modal>
    </div>
  );
};

export default CardEdit;

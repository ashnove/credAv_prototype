import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const buttonstyle={
  margin: "10px"
};

const formStyle={
  margin: "auto",
  width: "300px",
};

const NewTopicForm = () => {
  return (
    <div>
      <br></br>
      <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail" style={formStyle}>
        <Form.Label>Not present in above list? Add Below.</Form.Label>
        <Form.Control placeholder="Add extra topic names here" />
        
      </Form.Group>
      <Button variant="primary" type="submit" formMethod='post' formAction='./saveTopic' style={buttonstyle}>
          {/* Upar me form action me route daldo jah topic jaega  ()
          */}
        Submit
      </Button>
    </Form>

    </div>
    );
}

export default NewTopicForm;

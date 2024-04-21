
import React from 'react';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function InputField(){
  
  return (
        <Container className='h-100'>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <p>Here we can enter text and adjust the way we want it to be adjusted</p>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter text"
                            aria-label="Enter text"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default InputField;
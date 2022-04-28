import React from 'react';
import { Form, Container, Col, Button, FormControl} from 'react-bootstrap';

export default function Search(props){
    return (
        <Container>
            <Form className="mt-2">

                <Col sm={10} className="my-1">
                    <Form.Control
                        placeholder="Search for Pokemon"/>
                </Col>
                <Col sm={2} className="my-1">
                    <Button block>Search</Button>
                </Col>

            </Form>
        </Container>
    )
}
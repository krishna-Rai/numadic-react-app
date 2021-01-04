import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function DateForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row className="align-items-end">
        <Form.Group as={Col} sm={3}>
          <Form.Label>License no.</Form.Label>
          <Form.Control name="license" type="text" id="license" />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Label>Start Date</Form.Label>
          <Form.Control name="start_tis" type="date" id="start_tis" />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Label>End Date</Form.Label>
          <Form.Control name="end_tis" type="date" id="end_tis" />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Button type="submit">Search</Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

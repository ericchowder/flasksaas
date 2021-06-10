import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
      // using CSS bootstrap (I think)
    <Container className="mt-4">
      <Row className="justify-content-center">
        {/* on small devices, take 12/12 columns
            on medium+ devices, take 8/12 columns 
        *Fraction is based on the row, i.e. entire window width */}
        <Col xs={12} md={8}>
          <Form>
            <Row>
              {/* bar takes up 9/12 of the row 
              *button takes up roughly 2/12 i think*/}
              <Col xs={9}>
                <Form.Control placeholder="Search for new image" />
              </Col>
              {/* button takes up 3/12 of the row */}
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;

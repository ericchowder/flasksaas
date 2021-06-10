import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
      // using CSS bootstrap (I think)
    <Container className="mt-4">
      <Row className="justify-content-center">
        {/* on small devices, take 12/12 columns
            on medium+ devices, take 8/12 columns 
        *Fraction is based on the row, i.e. entire window width */}
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              {/* bar takes up 9/12 of the row 
              *button takes up roughly 2/12 i think*/}
              <Col xs={9}>
                    {/* defines type of input field 
                        set the value to state variable "word" 
                        onChange detects changes (from event?), "setWord" gets called
                    */}
                <Form.Control 
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Search for new image" 
                />
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

import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h1>Flask Saas Image Gallery</h1>
    <p>
      Welcome to my Flask Saas Image Gallery! To start, enter any search term
      into the search field.
      <p>
        If you would like more info on Unsplash API, please click the button
        below.
      </p>
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more about Unsplash
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;

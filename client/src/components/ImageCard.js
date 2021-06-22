import React from "react";
import { Card, Button } from "react-bootstrap";

// Displays Image Card for each image searched
// Contains image, title, description, and delete button
const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        {/* Calls deleteImage (passed in via prop from App.js) to delete */}
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;

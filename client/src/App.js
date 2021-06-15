import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TestComp from "./components/TestComp";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  // Create state variables for search words
  // Will be passed as props to Search comp
  const [searchWord, setSearchWord] = useState("");
  // Images returned from unsplash api
  const [images, setImages] = useState([]);

  // Handle searching for images
  // e is the submitted event
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${searchWord}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.urls.full);
        // Appends new search image to existing images (spread operator for previous imgs)
        // Uses user's searchWord as title for image card
        setImages([{ ...data, title: searchWord }, ...images]);
        // clear search
        setSearchWord("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("searchWord auto updates:", searchWord);

  return (
    <div className="App">
      <Header title="Flask Saas" />
      {/* setting word and setWord properties of Search comp */}
      <Search
        word={searchWord}
        setWord={setSearchWord}
        handleSubmit={handleSearchSubmit}
      />
      {/* margin top 4 */}
      <Container className="mt-4">
        {/* Can be treated like phones tablets laptops
            Phones allow 1 images per row
            Tablets allow 2 images per row
            Laptops allwo 3 images per row */}
        <Row xs={1} md={2} lg={3}>
          {/* Only insert ImageCard if images.length == true (an image exists)
              !! converts to bool*/}
          {/* !!images.length && <ImageCard image={images[0]} /> */}
          {/* Uses JS map function to map each image in images array to new array
              Each image in images array is now passed individually to new instance of ImageCard
              key={i} allows for react to identify each array element more easily */}
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>
      </Container>
      <TestComp />
    </div>
  );
}

export default App;

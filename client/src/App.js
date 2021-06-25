import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TestComp from "./components/TestComp";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

  // Gets passed into ImageCard to delete that particular image
  const handleDeleteImage = (id) => {
    // If filter callback returns true, image remains in images arr.
    // If filter callback returns false, image is removed from arr.
    // Basically compares current image id with all image.ids, removes
    // the correct one
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="App">
      <Router>
        <Header title="Flask Saas" />
        <Switch>
          {/* HOME ROUTE for Image Gallery */}
          <Route exact path="/">
            {/* setting word and setWord properties of Search comp */}
            <Search
              word={searchWord}
              setWord={setSearchWord}
              handleSubmit={handleSearchSubmit}
            />
            {/* margin top 4 */}
            <Container className="mt-4">
              {/* Renders images (if array is not empty), otherwise render Welcome comp */}
              {images.length ? (
                <>
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
                    {/* i.e. images.map loops through "images" array based on length,
                        the value of the instance is assigned to "image" along with an index */}
                    {images.map((image, i) => (
                      <Col key={i} className="pb-3">
                        <ImageCard
                          image={image}
                          deleteImage={handleDeleteImage}
                        />
                      </Col>
                    ))}
                  </Row>
                </>
              ) : (
                <Welcome />
              )}
            </Container>
          </Route>
          {/* COUNTER COMP (test comp) */}
          <Route exact path="/counter">
            <TestComp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

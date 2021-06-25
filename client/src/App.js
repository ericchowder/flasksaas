import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TestComp from "./components/TestComp";
import ImageGallery from "./components/ImageGallery";
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
            <ImageGallery
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              handleSearchSubmit={handleSearchSubmit}
              images={images}
              handleDeleteImage={handleDeleteImage}
            />
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

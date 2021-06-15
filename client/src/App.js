import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TestComp from "./components/TestComp";
import ImageCard from "./components/ImageCard";

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
      {/* Only insert ImageCard if images.length == true 
          !! converts to bool*/}
      {!!images.length && <ImageCard image={images[0]} />}
      <TestComp />
    </div>
  );
}

export default App;

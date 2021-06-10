import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import TestComp from './components/TestComp';

function App() {
  // Create state variables for search words
  // Will be passed as props to Search comp
  const [searchWord, setSearchWord] = useState('');

  // Handle searching for images
  // e is the submitted event
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
  }

  console.log("searchWord auto updates:", searchWord)

  return (
    <div className="App">
      <Header title="Flask Saas"/>
      <Search word={searchWord} setWord={setSearchWord} handleSubmit={handleSearchSubmit}/>
      <TestComp />
    </div>
  );
}

export default App;

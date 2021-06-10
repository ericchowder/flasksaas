import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import TestComp from './components/TestComp';

function App() {
  return (
    <div className="App">
      <Header title="Flask Saas"/>
      <Search />
      <TestComp />
    </div>
  );
}

export default App;

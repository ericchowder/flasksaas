import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header title="Flask Saas"/>
      <Search />
    </div>
  );
}

export default App;

import './App.css';
import Hero from "./Hero"
import Display from "./DisplayResult"
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route path="/display" element={<Display/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FishContainer from './containers/FishContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <nav>
        <h1>Animal Crossing: New Horizons Copendium</h1>
        <li><Link to="/"> Homepage </Link></li>
      </nav>

      


      <Routes>
        <Route path="/FishContainer" element={<FishContainer/>}/>
      </Routes>
    </div>
    <div>
      <ul>
        <li><Link to="/FishContainer">Fish</Link></li>
        <li>Bugs</li>
        <li>Sea Creatures</li>
        <li>Fossils</li>
      </ul>
    </div>
    </BrowserRouter>
  );
}

export default App;

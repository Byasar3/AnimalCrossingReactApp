import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FishContainer from './containers/FishContainer';
import BugsContainer from './containers/BugsContainer';
import SeaCreatureContainer from './containers/SeaCreaturesContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <nav>
        <h1>Animal Crossing: New Horizons Copendium</h1>
        <li><Link to="/"> Homepage </Link></li>
        <ul>
          <li><Link to="/FishContainer">Fish</Link></li>
          <li><Link to="/BugsContainer">Bugs</Link> </li>
          <li><Link to="/SeaCreaturesContainer">Sea Creatures</Link></li>
          <li>Fossils</li>
      </ul>
      </nav>

      


      <Routes>
        <Route path="/FishContainer" element={<FishContainer/>}/>
        <Route path="/BugsContainer" element={<BugsContainer/>}/>
        <Route path="/SeaCreaturesContainer" element={<SeaCreatureContainer/>}/>
      </Routes>
    </div>
    <div>

    </div>
    </BrowserRouter>
  );
}

export default App;

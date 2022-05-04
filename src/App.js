import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import PlantSelection from './PlantSelectionPage';
import Planner from './PlannerViewPage';
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes><Route path = "/" element = {<HomePage/>}/></Routes>
      <Routes><Route path = "/plantselection" element = {<PlantSelection/>}/></Routes>
      <Routes><Route path = "/planner" element = {<Planner/>}/></Routes>
    </div>
  );
}

export default App;

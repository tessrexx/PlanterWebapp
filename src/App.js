import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import PlantSelection from './PlantSelectionPage';
import Planner from './PlannerViewPage';
import { Route, Link, Router } from 'react-router-dom';
import NavBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/plantselection" component = {PlantSelection}/>
      <Route exact path = "/planner" component = {Planner}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import PlantSelection from './PlantSelectionPage';
import Planner from './PlannerViewPage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <PlantSelection/>
      <Planner/>
    </div>
  );
}

export default App;

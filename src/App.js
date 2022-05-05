import "./App.css";
import HomePage from "./HomePage";
import PlantSelection from "./PlantSelectionPage";
import Planner from "./PlannerViewPage";
import { Routes, Route } from "react-router-dom";
import TempAccessButtons from "./TempAccessButtons";

function App() {
  return (
    <div className="App">
      <TempAccessButtons />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/plantselection" element={<PlantSelection />} />
      </Routes>
      <Routes>
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </div>
  );
}

export default App;

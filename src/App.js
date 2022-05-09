import "./App.css";
import HomePage from "./Pages/HomePage";
import PlantSelection from "./Pages/PlantSelectionPage";
import Planner from "./Pages/PlannerViewPage";
import { Routes, Route } from "react-router-dom";
import TempAccessButtons from "./TempAccessButtons";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>

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

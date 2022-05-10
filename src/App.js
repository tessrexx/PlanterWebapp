import "./App.css";
import HomePage from "./Pages/HomePage";
import PlantSelection from "./Pages/PlantSelectionPage";
import Planner from "./Pages/PlannerViewPage";
import { Routes, Route, Router } from "react-router-dom";
import TempAccessButtons from "./TempAccessButtons";
import Navbar from "./Components/Navbar";
import theme from "./Components/theme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TempAccessButtons />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

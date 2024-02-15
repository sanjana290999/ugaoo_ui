import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import Navbar from "./componets/Navbar";
import PlantHomePage from "./componets/PlantHomePage";
import Sign_in from "./componets/Sign_in";
import SeedsPage from "./componets/Seeds";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/plantcollection" element={<PlantHomePage />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/seeds" element={<SeedsPage />} />
      </Routes>
    </div>
  );
}

export default App;

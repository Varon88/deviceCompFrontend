import "./App.css";
import FoooterComponent from "./Components/FoooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import LaptopListComponent from "./Components/LaptopListComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //used to establish routing; required to run command npm install react-router-dom

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<LaptopListComponent />} />
              <Route path="/getall" element={<LaptopListComponent />} />
            </Routes>
          </div>
          <FoooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;

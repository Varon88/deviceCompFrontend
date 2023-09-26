import "./App.css";
import CreateLaptopComponent from "./Components/Laptop/CreateLaptopComponent";
import FoooterComponent from "./Components/FoooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import LaptopListComponent from "./Components/Laptop/LaptopListComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //used to establish routing; required to run command npm install react-router-dom
import UpdateLaptopComponent from "./Components/Laptop/UpdateLaptopComponent";
import DeleteLaptopComponent from "./Components/Laptop/DeleteLaptopComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            {/* switch tags have been depracated */}
            <Route path="/" exact element={<LaptopListComponent />} />
            <Route path="/laptop-getall" element={<LaptopListComponent />} />
            <Route path="/laptop-add" element={<CreateLaptopComponent />} />
            <Route
              path="/laptop-edit/:id"
              element={<UpdateLaptopComponent />}
            />
            <Route
              path="/laptop-delete/:id"
              element={<DeleteLaptopComponent />}
            />
          </Routes>
        </div>
        <FoooterComponent />
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import FoooterComponent from "./Components/FoooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import LaptopListComponent from "./Components/LaptopListComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <LaptopListComponent />
      </div>
      <FoooterComponent />
    </div>
  );
}

export default App;

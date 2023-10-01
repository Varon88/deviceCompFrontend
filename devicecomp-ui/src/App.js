import "./App.css";
import CreateLaptopComponent from "./Components/Laptop/CreateLaptopComponent";
import FoooterComponent from "./Components/FoooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import LaptopListComponent from "./Components/Laptop/LaptopListComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //used to establish routing; required to run command npm install react-router-dom
import UpdateLaptopComponent from "./Components/Laptop/UpdateLaptopComponent";
import DeleteLaptopComponent from "./Components/Laptop/DeleteLaptopComponent";
import RecommendLaptopExecuterComponent from "./Components/Laptop/RecommendLaptopExecuterComponent";
import RecommendLaptopComponent from "./Components/Laptop/RecomendLaptopComponent";
import WelcomePageComponent from "./Components/WelcomePageComponent";
import CreatePhoneComponent from "./Components/Phones/CreatePhoneComponent";
import DeletePhoneComponent from "./Components/Phones/DeletePhoneComponent";
import UpdatePhoneComponent from "./Components/Phones/UpdatePhoneComponent";
import PhoneListComponent from "./Components/Phones/PhoneListComponent";
import ReccomendPhonesComponent from "./Components/Phones/RecommendPhoneComponent";
import RecommendPhoneExecuterComponent from "./Components/Phones/RecommendPhoneExecuterComponent";
import SpeakerListComponent from "./Components/Speakers/SpeakerListComponent";
import CreateSpeakerComponent from "./Components/Speakers/CreateSpeakerComponent";
import UpdateSpeakerComponent from "./Components/Speakers/UpdateSpeakerComponent";
import DeleteSpeakerComponent from "./Components/Speakers/DeleteSpeakerComponent";
import ReccomendSpeakerComponent from "./Components/Speakers/RecommendSpeakersComponent";
import RecommendSpeakerExecuterComponent from "./Components/Speakers/RecommendSpeakerExecuterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            {/* Laptop based Routes */}
            <Route path="/" exact element={<WelcomePageComponent />} />
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
            <Route
              path="/laptop-recommend"
              element={<RecommendLaptopComponent />}
            />
            <Route
              path="/laptop-recommend-exc/:condition/:price/:specs"
              element={<RecommendLaptopExecuterComponent />}
            />
            {/* Laptop based Routes */}

            {/* Phone based routes */}

            <Route path="/phone-getall" element={<PhoneListComponent />} />
            <Route path="/phone-add" element={<CreatePhoneComponent />} />
            <Route path="/phone-edit/:id" element={<UpdatePhoneComponent />} />
            <Route
              path="/phone-delete/:id"
              element={<DeletePhoneComponent />}
            />
            <Route
              path="/phone-recommend"
              element={<ReccomendPhonesComponent />}
            />
            <Route
              path="/phone-recommend-exc/:condition/:price/:storage"
              element={<RecommendPhoneExecuterComponent />}
            />

            {/* Phone based routes */}

            {/* Speaker based routes */}
            <Route path="/speaker-getall" element={<SpeakerListComponent />} />
            <Route path="/speaker-add" element={<CreateSpeakerComponent />} />
            <Route
              path="/speaker-edit/:id"
              element={<UpdateSpeakerComponent />}
            />
            <Route
              path="/speaker-delete/:id"
              element={<DeleteSpeakerComponent />}
            />
            <Route
              path="/speaker-recommend"
              element={<ReccomendSpeakerComponent />}
            />
            <Route
              path="/speaker-recommend-exc/:condition/:batteryCapacity"
              element={<RecommendSpeakerExecuterComponent />}
            />
            {/* Speaker based routes */}
          </Routes>
        </div>
        <FoooterComponent />
      </Router>
    </div>
  );
}

export default App;

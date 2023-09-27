import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import phoneService from "../../Services/PhoneService";

const CreatePhoneComponent = () => {
  const [phoneName, setPhoneName] = useState("");
  const [phoneStorage, setPhoneStorage] = useState("");
  const [phoneManufacturer, setPhoneManufacturer] = useState("");
  const [phoneModel, setPhoneModel] = useState("");
  const [phoneBatteryCapacity, setPhoneBatteryCapacity] = useState("");
  const [phonePrice, setPhonePrice] = useState("");
  const [phoneUseCondition, setPhoneUseCondition] = useState("");
  const [phoneReleaseDate, setPhoneReleaseDate] = useState("");
  const navigate = useNavigate();

  const savePhone = (event) => {
    event.preventDefault();

    const phone = {
      name: phoneName,
      storage: phoneStorage,
      manufacturer: phoneManufacturer,
      model: phoneModel,
      batteryCapacity: phoneBatteryCapacity,
      price: phonePrice,
      useCondition: phoneUseCondition,
      releaseDate: phoneReleaseDate,
    };

    phoneService
      .createPhones(phone)
      .then(() => {
        navigate("/phone-getall");
      })
      .catch((err) => console.log(err));
  };

  const cancel = () => {
    navigate("/phone-getall");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className="text-center"> Add Phones</h3>
            <div className="card-body">
              <form onSubmit={savePhone}>
                <div className="form-group">
                  <label>Phone Name: </label>
                  <input
                    placeholder="Phone name"
                    name="phoneName"
                    className="form-control"
                    value={phoneName}
                    onChange={(event) => setPhoneName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Storage: </label>
                  <input
                    placeholder="Phone Storage"
                    name="phoneStorage"
                    className="form-control"
                    value={phoneStorage}
                    onChange={(event) => setPhoneStorage(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone manufacturer: </label>
                  <input
                    placeholder="Phone manufacturer"
                    name="phoneManufacturer"
                    className="form-control"
                    value={phoneManufacturer}
                    onChange={(event) =>
                      setPhoneManufacturer(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone model: </label>
                  <input
                    placeholder="Phone model"
                    name="phoneModel"
                    className="form-control"
                    value={phoneModel}
                    onChange={(event) => setPhoneModel(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Battery Capacity: </label>
                  <input
                    placeholder="Phone battery capacity"
                    name="phoneBatteryCapacity"
                    className="form-control"
                    value={phoneBatteryCapacity}
                    onChange={(event) =>
                      setPhoneBatteryCapacity(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone price: </label>
                  <input
                    placeholder="Phone price"
                    name="phonePrice"
                    className="form-control"
                    value={phonePrice}
                    onChange={(event) => setPhonePrice(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone use conidtion: </label>
                  <input
                    placeholder="Phone UseCondition"
                    name="PhoneUseCondition"
                    className="form-control"
                    value={phoneUseCondition}
                    onChange={(event) =>
                      setPhoneUseCondition(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone release date: </label>
                  <input
                    placeholder="Phone ReleaseDate"
                    name="phoneReleaseDate"
                    className="form-control"
                    value={phoneReleaseDate}
                    onChange={(event) =>
                      setPhoneReleaseDate(event.target.value)
                    }
                  />
                </div>
                <button className="btn btn-success" onClick={savePhone}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePhoneComponent;

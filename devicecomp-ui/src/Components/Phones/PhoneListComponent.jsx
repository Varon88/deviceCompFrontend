import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import phoneService from "../../Services/PhoneService";

const PhoneListComponent = () => {
  const [phones, setPhones] = useState([]);
  const navigate = useNavigate();
  const rowRef = useRef();

  const addPhone = () => {
    navigate("/phone-add");
  };

  const editPhones = (id) => {
    navigate(`/phone-edit/${id}`);
  };

  const deletePhones = (id) => {
    navigate(`/phone-delete/${id}`);
  };

  const getRecs = () => {
    navigate("/phone-recommend");
  };

  const exit = () => {
    navigate("/");
  };

  React.useEffect(() => {
    phoneService.getPhones().then((res) => {
      setPhones(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Phone List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addPhone}>
          Add Phones
        </button>
      </div>
      <div className="row">
        <button className="btn btn-info" onClick={getRecs}>
          Get Recommendations
        </button>
      </div>
      <div className="row">
        <button className="btn btn-warning" onClick={exit}>
          Exit
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {/* <th>laptopId</th> */}
              <th>PhoneName</th>
              <th>PhoneStorage</th>
              <th>PhoneManufacturer</th>
              <th>PhoneModel</th>
              <th>PhoneBatteryCapacity</th>
              <th>PhonePrice</th>
              <th>PhoneUseCondition</th>
              <th>PhoneReleaseDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((phones) => (
              <tr key={phones.id} ref={rowRef}>
                <td>{phones.name}</td>
                <td>{phones.storage}</td>
                <td>{phones.manufacturer}</td>
                <td>{phones.model}</td>
                <td>{phones.batteryCapacity}</td>
                <td>{phones.price}</td>
                <td>{phones.useCondition}</td>
                <td>{phones.releaseDate}</td>
                <td>
                  <button
                    onClick={() => editPhones(phones.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deletePhones(phones.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhoneListComponent;

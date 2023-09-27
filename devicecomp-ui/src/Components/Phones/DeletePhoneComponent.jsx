import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import phoneService from "../../Services/PhoneService";

const DeletePhoneComponent = () => {
  const [phoneName, setPhoneName] = useState("");
  const [phoneStorage, setPhoneStorage] = useState("");
  const [phoneManufacturer, setPhoneManufacturer] = useState("");
  const [phoneModel, setPhoneModel] = useState("");
  const [phoneBatteryCapacity, setPhoneBatteryCapacity] = useState("");
  const [phonePrice, setPhonePrice] = useState("");
  const [phoneUseCondition, setPhoneUseCondition] = useState("");
  const [phoneReleaseDate, setPhoneReleaseDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    phoneService
      .getById(id)
      .then((phone) => {
        setPhoneName(phone.data.name);
        setPhoneStorage(phone.data.storage);
        setPhoneManufacturer(phone.data.manufacturer);
        setPhoneModel(phone.data.model);
        setPhoneBatteryCapacity(phone.data.batteryCapacity);
        setPhonePrice(phone.data.price);
        setPhoneUseCondition(phone.data.useCondition);
        setPhoneReleaseDate(phone.data.releaseDate);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deletePhone = (event) => {
    event.preventDefault();
    phoneService.deletePhones(id).then(() => {
      navigate("/phone-getall");
    });
  };

  const cancel = () => {
    navigate("/phone-getall");
  };

  return (
    <div>
      <h1 className="text-center">Delete Phones</h1>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*key={laptops.id*/}
            {/* <td>{laptops.id}</td> */}
            <td>{phoneName}</td>
            <td>{phoneStorage}</td>
            <td>{phoneManufacturer}</td>
            <td>{phoneModel}</td>
            <td>{phoneBatteryCapacity}</td>
            <td>{phonePrice}</td>
            <td>{phoneUseCondition}</td>
            <td>{phoneReleaseDate}</td>
          </tr>
        </tbody>
      </table>
      <div className="deletion-confirmation">
        Are you sure you want to delete this element?
      </div>
      <button onClick={deletePhone} className="btn btn-warning">
        Delete
      </button>
      <button
        className="btn btn-danger"
        onClick={cancel}
        style={{ marginLeft: "10px" }}
      >
        Cancel
      </button>
    </div>
  );
};
export default DeletePhoneComponent;

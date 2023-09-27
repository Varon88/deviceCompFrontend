import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import phoneService from "../../Services/PhoneService";

const RecommendPhoneExecuterComponent = () => {
  const [phones, setPhones] = useState([]);
  const navigate = useNavigate();
  const rowRef = useRef();
  const { condition } = useParams();
  const { price } = useParams();
  const { storage } = useParams();

  const cancel = () => {
    navigate("/phone-getall");
  };

  React.useEffect(() => {
    console.log(condition, price, storage);
    phoneService.recommendPhones(condition, price, storage).then((res) => {
      setPhones(res.data);
    });
  }, [condition, price, storage]);

  return (
    <div>
      <h2 className="text-center">Recomended Phone List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={cancel}>
          Done
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
            </tr>
          </thead>
          <tbody>
            {phones.map((phones) => (
              <tr key={phones.id} ref={rowRef}>
                {/*key={laptops.id*/}
                {/* <td>{laptops.id}</td> */}
                <td>{phones.name}</td>
                <td>{phones.storage}</td>
                <td>{phones.manufacturer}</td>
                <td>{phones.model}</td>
                <td>{phones.batteryCapacity}</td>
                <td>{phones.price}</td>
                <td>{phones.useCondition}</td>
                <td>{phones.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendPhoneExecuterComponent;

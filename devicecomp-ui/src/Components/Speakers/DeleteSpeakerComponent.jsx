import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import speakerService from "../../Services/SpeakerService";

const DeleteSpeakerComponent = () => {
  const [speakerName, setSpeakerName] = useState("");
  const [speakerManufacturer, setSpeakerManufacturer] = useState("");
  const [speakerModel, setSpeakerModel] = useState("");
  const [speakerBatteryCapacity, setSpeakerBatteryCapacity] = useState("");
  const [speakerUseCondition, setSpeakerUseCondition] = useState("");
  const [speakerReleaseDate, setSpeakerReleaseDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    speakerService
      .getById(id)
      .then((phone) => {
        setSpeakerName(phone.data.name);
        setSpeakerManufacturer(phone.data.storage);
        setSpeakerManufacturer(phone.data.manufacturer);
        setSpeakerModel(phone.data.model);
        setSpeakerBatteryCapacity(phone.data.batteryCapacity);
        setSpeakerUseCondition(phone.data.useCondition);
        setSpeakerReleaseDate(phone.data.releaseDate);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteSpeaker = (event) => {
    event.preventDefault();
    speakerService.deletepSpeaker(id).then(() => {
      navigate("/speaker-getall");
    });
  };

  const cancel = () => {
    navigate("/speaker-getall");
  };

  return (
    <div>
      <h1 className="text-center">Delete Phones</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {/* <th>laptopId</th> */}
            <th>SpeakerName</th>
            <th>SpeakerManufacturer</th>
            <th>SpeakerModel</th>
            <th>SpeakerBatteryCapacity</th>
            <th>SpeakerUseCondition</th>
            <th>SpeakerReleaseDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*key={laptops.id*/}
            {/* <td>{laptops.id}</td> */}
            <td>{speakerName}</td>
            <td>{speakerManufacturer}</td>
            <td>{speakerModel}</td>
            <td>{speakerBatteryCapacity}</td>
            <td>{speakerUseCondition}</td>
            <td>{speakerReleaseDate}</td>
          </tr>
        </tbody>
      </table>
      <div className="deletion-confirmation">
        Are you sure you want to delete this element?
      </div>
      <button onClick={deleteSpeaker} className="btn btn-warning">
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
export default DeleteSpeakerComponent;

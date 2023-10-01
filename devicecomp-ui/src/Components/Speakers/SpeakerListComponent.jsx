import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import phoneService from "../../Services/PhoneService";

const SpeakerListComponent = () => {
  const [speaker, setSpeaker] = useState([]);
  const navigate = useNavigate();
  const rowRef = useRef();

  const addSpeakers = () => {
    navigate("/phone-add");
  };

  const editSpeakers = (id) => {
    navigate(`/phone-edit/${id}`);
  };

  const deleteSpeakers = (id) => {
    navigate(`/phone-delete/${id}`);
  };

  const getRecs = () => {
    navigate("/phone-recommend");
  };

  const exit = () => {
    navigate("/");
  };

  React.useEffect(() => {
    speakerService.getSpeaker().then((res) => {
      setSpeaker(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Portable Speaker List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addSpeakers}>
          Add Speaker
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
              <th>SpeakerName</th>
              <th>SpeakerManufacturer</th>
              <th>SpeakerModel</th>
              <th>SpeakerBatteryCapacity</th>
              <th>SpeakerUseCondition</th>
              <th>SpeakerReleaseDate</th>
            </tr>
          </thead>
          <tbody>
            {speaker.map((speaker) => (
              <tr key={speaker.id} ref={rowRef}>
                <td>{speakerName}</td>
                <td>{speakerManufacturer}</td>
                <td>{speakerModel}</td>
                <td>{speakerBatteryCapacity}</td>
                <td>{speakerUseCondition}</td>
                <td>{speakerReleaseDate}</td>
                <td>
                  <button
                    onClick={() => editSpeakers(speaker.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteSpeakers(speaker.id)}
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

export default SpeakerListComponent;

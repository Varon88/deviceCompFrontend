import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import speakerService from "../../Services/SpeakerService";

const SpeakerListComponent = () => {
  const [speaker, setSpeaker] = useState([]);
  const navigate = useNavigate();
  const rowRef = useRef();

  const addSpeakers = () => {
    navigate("/speaker-add");
  };

  const editSpeakers = (id) => {
    navigate(`/speaker-edit/${id}`);
  };

  const deleteSpeakers = (id) => {
    navigate(`/speaker-delete/${id}`);
  };

  const getRecs = () => {
    navigate("/speaker-recommend");
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
                <td>{speaker.name}</td>
                <td>{speaker.manufacturer}</td>
                <td>{speaker.model}</td>
                <td>{speaker.batteryCapacity}</td>
                <td>{speaker.useCondition}</td>
                <td>{speaker.releaseDate}</td>
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

import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import speakerService from "../../Services/SpeakerService";

const RecommendSpeakerExecuterComponent = () => {
  const [speakers, setSpeakers] = useState([]);
  const navigate = useNavigate();
  const rowRef = useRef();
  const { condition } = useParams();
  const { batteryCapacity } = useParams();

  const cancel = () => {
    navigate("/speaker-getall");
  };

  React.useEffect(() => {
    console.log(condition, batteryCapacity);
    speakerService.recommendSpeaker(condition, batteryCapacity).then((res) => {
      setSpeakers(res.data);
    });
  }, [condition, batteryCapacity]);

  return (
    <div>
      <h2 className="text-center">Recomended Speaker List</h2>
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
              <th>SpeakerName</th>
              <th>SpeakerManufacturer</th>
              <th>SpeakerModel</th>
              <th>SpeakerBatteryCapacity</th>
              <th>SpeakerUseCondition</th>
              <th>SpeakerReleaseDate</th>
            </tr>
          </thead>
          <tbody>
            {speakers.map((speaker) => (
              <tr key={speaker.id} ref={rowRef}>
                <td>{speaker.name}</td>
                <td>{speaker.manufacturer}</td>
                <td>{speaker.model}</td>
                <td>{speaker.batteryCapacity}</td>
                <td>{speaker.useCondition}</td>
                <td>{speaker.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendSpeakerExecuterComponent;

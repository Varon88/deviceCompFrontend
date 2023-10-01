import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import speakerService from "../../Services/SpeakerService";

const CreateSpeakerComponent = () => {
  const [speakerName, setSpeakerName] = useState("");
  const [speakerManufacturer, setSpeakerManufacturer] = useState("");
  const [speakerModel, setSpeakerModel] = useState("");
  const [speakerBatteryCapacity, setSpeakerBatteryCapacity] = useState("");
  const [speakerUseCondition, setSpeakerUseCondition] = useState("");
  const [speakerReleaseDate, setSpeakerReleaseDate] = useState("");
  const navigate = useNavigate();

  const saveSpeaker = (event) => {
    event.preventDefault();

    const speaker = {
      name: speakerName,
      manufacturer: speakerManufacturer,
      model: speakerModel,
      batteryCapacity: speakerBatteryCapacity,
      useCondition: speakerUseCondition,
      releaseDate: speakerReleaseDate,
    };

    speakerService
      .createSpeakers(speaker)
      .then(() => {
        navigate("/speaker-getall");
      })
      .catch((err) => console.log(err));
  };

  const cancel = () => {
    navigate("/speaker-getall");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className="text-center"> Add Speakers</h3>
            <div className="card-body">
              <form onSubmit={saveSpeaker}>
                <div className="form-group">
                  <label>Speaker Name: </label>
                  <input
                    placeholder="Speaker name"
                    name="speakerName"
                    className="form-control"
                    value={speakerName}
                    onChange={(event) => setSpeakerName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Speaker manufacturer: </label>
                  <input
                    placeholder="Speaker manufacturer"
                    name="speakerManufacturer"
                    className="form-control"
                    value={speakerManufacturer}
                    onChange={(event) =>
                      setSpeakerManufacturer(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Speakers model: </label>
                  <input
                    placeholder="speaker model"
                    name="speakerModel"
                    className="form-control"
                    value={speakerModel}
                    onChange={(event) => setSpeakerModel(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Speaker Battery Capacity: </label>
                  <input
                    placeholder="Speaker battery capacity"
                    name="speakerBatteryCapacity"
                    className="form-control"
                    value={speakerBatteryCapacity}
                    onChange={(event) =>
                      setSpeakerBatteryCapacity(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Speaker use conidtion: </label>
                  <input
                    placeholder="Speaker use conidtion"
                    name="speakerUseCondition"
                    className="form-control"
                    value={speakerUseCondition}
                    onChange={(event) =>
                      setSpeakerUseCondition(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Speaker release date: </label>
                  <input
                    placeholder="Speaker ReleaseDate"
                    name="speakerReleaseDate"
                    className="form-control"
                    value={speakerReleaseDate}
                    onChange={(event) =>
                      setSpeakerReleaseDate(event.target.value)
                    }
                  />
                </div>
                <button className="btn btn-success" onClick={saveSpeaker}>
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

export default CreateSpeakerComponent;

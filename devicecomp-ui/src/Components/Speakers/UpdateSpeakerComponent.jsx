import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import speakerService from "../../Services/SpeakerService";

const UpdateSpeakerComponent = () => {
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
      .then((speaker) => {
        setSpeakerName(speaker.data.name);
        setSpeakerManufacturer(speaker.data.storage);
        setSpeakerManufacturer(speaker.data.manufacturer);
        setSpeakerModel(speaker.data.model);
        setSpeakerBatteryCapacity(speaker.data.batteryCapacity);
        setSpeakerUseCondition(speaker.data.useCondition);
        setSpeakerReleaseDate(speaker.data.releaseDate);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateSpeaker = (event) => {
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
      .updateSpeaker(speaker, id)
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
            <h3 className="text-center"> Update Speaker</h3>
            <div className="card-body">
              <form onSubmit={updateSpeaker}>
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
                    placeholder="Speaker use condition"
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
                <button className="btn btn-success" onClick={updateSpeaker}>
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
export default UpdateSpeakerComponent;

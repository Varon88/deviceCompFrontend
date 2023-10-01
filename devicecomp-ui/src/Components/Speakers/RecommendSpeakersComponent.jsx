import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReccomendSpeakerComponent = () => {
  const [speakerBatteryCapacity, setSpeakerBatteryCapacity] = useState("");
  const [speakerUseCondition, setSpeakerUseCondition] = useState("");
  const navigate = useNavigate();

  const getRecomendation = () => {
    // event.preventDefault();
    navigate(
      `/speaker-recommend-exc/${speakerUseCondition}/${speakerBatteryCapacity}}`
    );
  };

  const cancel = () => {
    navigate("/speaker-getall");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className="text-center"> Speaker Recommendation </h3>
            <div className="card-body">
              <form onSubmit={getRecomendation}>
                <div className="form-group">
                  <label>Speaker use conidtion: </label>
                  <input
                    placeholder="New / Used"
                    name="speakerUseCondition"
                    className="form-control"
                    value={speakerUseCondition}
                    onChange={(event) =>
                      setSpeakerUseCondition(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Expected Battery Capacity:: </label>
                  <input
                    placeholder="Battery Capacity (use numerals)"
                    name="speakerPrice"
                    className="form-control"
                    value={speakerBatteryCapacity}
                    onChange={(event) =>
                      setSpeakerBatteryCapacity(event.target.value)
                    }
                  />
                </div>
                <button className="btn btn-success" onClick={getRecomendation}>
                  Submit
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

export default ReccomendSpeakerComponent;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReccomendPhonesComponent = () => {
  const [phoneStorage, setPhoneStorage] = useState("");
  const [phonePrice, setPhonePrice] = useState("");
  const [phoneUseCondition, setPhoneUseCondition] = useState("");
  const navigate = useNavigate();

  const getRecomendation = () => {
    // event.preventDefault();
    navigate(
      `/phone-recommend-exc/${phoneUseCondition}/${phonePrice}/${phoneStorage}`
    );
  };

  const cancel = () => {
    navigate("/phone-getall");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className="text-center"> Phone Recommendation </h3>
            <div className="card-body">
              <form onSubmit={getRecomendation}>
                <div className="form-group">
                  <label>Expected storage: </label>
                  <input
                    placeholder="64 /128 /256"
                    name="phoneStorage"
                    className="form-control"
                    value={phoneStorage}
                    onChange={(event) => setPhoneStorage(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Max price: </label>
                  <input
                    placeholder="Max price"
                    name="phonePrice"
                    className="form-control"
                    value={phonePrice}
                    onChange={(event) => setPhonePrice(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone use conidtion: </label>
                  <input
                    placeholder="New / Used"
                    name="phoneUseCondition"
                    className="form-control"
                    value={phoneUseCondition}
                    onChange={(event) =>
                      setPhoneUseCondition(event.target.value)
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

export default ReccomendPhonesComponent;

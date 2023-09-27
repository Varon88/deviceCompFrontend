import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReccomendLaptopsComponent = () => {
  const [laptopSpecs, setLaptopSpecs] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");
  const [laptopUseCondition, setLaptopUseCondition] = useState("");
  const navigate = useNavigate();

  const getRecomendation = () => {
    // event.preventDefault();
    navigate(
      `/laptop-recommend-exc/${laptopUseCondition}/${laptopPrice}/${laptopSpecs}`
    );
  };

  const cancel = () => {
    navigate("/laptop-getall");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className="text-center"> Laptop Recommendation </h3>
            <div className="card-body">
              <form onSubmit={getRecomendation}>
                <div className="form-group">
                  <label>Expected specs: </label>
                  <input
                    placeholder="Low Tier / Mid Tier/ High Tier"
                    name="laptopSpecs"
                    className="form-control"
                    value={laptopSpecs}
                    onChange={(event) => setLaptopSpecs(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Max price: </label>
                  <input
                    placeholder="Max price"
                    name="laptopPrice"
                    className="form-control"
                    value={laptopPrice}
                    onChange={(event) => setLaptopPrice(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Laptop use conidtion: </label>
                  <input
                    placeholder="New / Refurbished"
                    name="laptopUseCondition"
                    className="form-control"
                    value={laptopUseCondition}
                    onChange={(event) =>
                      setLaptopUseCondition(event.target.value)
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

export default ReccomendLaptopsComponent;

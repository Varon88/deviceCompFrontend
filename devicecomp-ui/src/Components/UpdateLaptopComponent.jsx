import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import laptopService from "../Services/LaptopService";

const UpdateLaptopComponent = () => {
  const [laptopName, setLaptopName] = useState("");
  const [laptopStorage, setLaptopStorage] = useState("");
  const [laptopManufacturer, setLaptopManufacturer] = useState("");
  const [laptopModel, setLaptopModel] = useState("");
  const [laptopSpecs, setLaptopSpecs] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");
  const [laptopUseCondition, setLaptopUseCondition] = useState("");
  const [laptopReleaseDate, setLaptopReleaseDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    laptopService
      .getById(id)
      .then((laptop) => {
        setLaptopName(laptop.data.name);
        setLaptopStorage(laptop.data.storage);
        setLaptopManufacturer(laptop.data.manufacturer);
        setLaptopModel(laptop.data.model);
        setLaptopSpecs(laptop.data.specs);
        setLaptopPrice(laptop.data.price);
        setLaptopUseCondition(laptop.data.useCondition);
        setLaptopReleaseDate(laptop.data.releaseDate);
      })
      .catch((err) => console.log(err));

    // let existingLaptop = laptopService.getById(id);
    // setLaptopName(existingLaptop.name);
    // setLaptopStorage(existingLaptop.storage);
    // setLaptopManufacturer(existingLaptop.manufacturer);
    // setLaptopModel(existingLaptop.model);
    // setLaptopSpecs(existingLaptop.specs);
    // setLaptopPrice(existingLaptop.price);
    // setLaptopUseCondition(existingLaptop.useCondition);
    // setLaptopReleaseDate(existingLaptop.releaseDate);

    // console.log(existingLaptop);
  }, [id]);

  const updateLaptop = (event) => {
    event.preventDefault();

    const laptop = {
      name: laptopName,
      storage: laptopStorage,
      manufacturer: laptopManufacturer,
      model: laptopModel,
      specs: laptopSpecs,
      price: laptopPrice,
      useCondition: laptopUseCondition,
      releaseDate: laptopReleaseDate,
    };

    laptopService
      .updateLaptop(laptop, id)
      .then(() => {
        navigate("/laptop-getall");
      })
      .catch((err) => console.log(err));
  };

  const cancel = () => {
    navigate("/laptop-getall");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className="text-center"> Update Laptops</h3>
            <div className="card-body">
              <form onSubmit={updateLaptop}>
                <div className="form-group">
                  <label>Laptop Name: </label>
                  <input
                    placeholder="Laptop name"
                    name="laptopName"
                    className="form-control"
                    value={laptopName}
                    onChange={(e) => setLaptopName(laptopName)}
                  />
                </div>
                <div className="form-group">
                  <label>Laptop Storage: </label>
                  <input
                    placeholder="Laptop Storage"
                    name="laptopStorage"
                    className="form-control"
                    value={laptopStorage}
                    onChange={(event) => setLaptopStorage(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Laptop manufacturer: </label>
                  <input
                    placeholder="Laptop manufacturer"
                    name="laptopManufacturer"
                    className="form-control"
                    value={laptopManufacturer}
                    onChange={(event) =>
                      setLaptopManufacturer(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Laptop model: </label>
                  <input
                    placeholder="Laptop model"
                    name="laptopModel"
                    className="form-control"
                    value={laptopModel}
                    onChange={(event) => setLaptopModel(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Laptop specs: </label>
                  <input
                    placeholder="Laptop specs"
                    name="laptopSpecs"
                    className="form-control"
                    value={laptopSpecs}
                    onChange={(event) => setLaptopSpecs(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Laptop price: </label>
                  <input
                    placeholder="Laptop price"
                    name="laptopPrice"
                    className="form-control"
                    value={laptopPrice}
                    onChange={(event) => setLaptopPrice(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Laptop use conidtion: </label>
                  <input
                    placeholder="Laptop UseCondition"
                    name="laptopUseCondition"
                    className="form-control"
                    value={laptopUseCondition}
                    onChange={(event) =>
                      setLaptopUseCondition(event.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Laptop release date: </label>
                  <input
                    placeholder="Laptop ReleaseDate"
                    name="laptopReleaseDate"
                    className="form-control"
                    value={laptopReleaseDate}
                    onChange={(event) =>
                      setLaptopReleaseDate(event.target.value)
                    }
                  />
                </div>
                <button className="btn btn-success" onClick={updateLaptop}>
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

export default UpdateLaptopComponent;

// this.state = {id: this.props.match.params.id}

// // useEffect(() => {
// //   laptopService.getById(this.state).then((res) => {
// //     setLaptop(res.data);
// //   });
// // }, [id]);

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import laptopService from "../../Services/LaptopService";

const DeleteLaptopComponent = () => {
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
        console.log(laptop);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteLaptop = (event) => {
    event.preventDefault();
    laptopService.deleteLaptop(id).then(() => {
      navigate("/laptop-getall");
    });
  };

  const cancel = () => {
    navigate("/laptop-getall");
  };

  return (
    <div>
      <h1 className="text-center">Delete Laptop</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {/* <th>laptopId</th> */}
            <th>laptopName</th>
            <th>laptopStorage</th>
            <th>laptopManufacturer</th>
            <th>laptopModel</th>
            <th>laptopSpecs</th>
            <th>laptopPrice</th>
            <th>laptopUseCondition</th>
            <th>laptopReleaseDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*key={laptops.id*/}
            {/* <td>{laptops.id}</td> */}
            <td>{laptopName}</td>
            <td>{laptopStorage}</td>
            <td>{laptopManufacturer}</td>
            <td>{laptopModel}</td>
            <td>{laptopSpecs}</td>
            <td>{laptopPrice}</td>
            <td>{laptopUseCondition}</td>
            <td>{laptopReleaseDate}</td>
          </tr>
        </tbody>
      </table>
      <div className="deletion-confirmation">
        Are you sure you want to delete this element?
      </div>
      <button onClick={deleteLaptop} className="btn btn-warning">
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

export default DeleteLaptopComponent;

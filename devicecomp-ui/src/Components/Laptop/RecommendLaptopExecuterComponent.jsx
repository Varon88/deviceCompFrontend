import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LaptopService from "../../Services/LaptopService";

const RecommendLaptopExecuterComponent = () => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();
  const rowRef = useRef();
  const { condition } = useParams();
  const { price } = useParams();
  const { specs } = useParams();

  const cancel = () => {
    navigate("/laptop-getall");
  };

  React.useEffect(() => {
    console.log(condition, price, specs);
    LaptopService.recommendLaptop(condition, price, specs).then((res) => {
      setLaptops(res.data);
    });
  }, [condition, price, specs]);

  return (
    <div>
      <h2 className="text-center">Recomended Laptop List</h2>
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
            {laptops.map((laptops) => (
              <tr key={laptops.id} ref={rowRef}>
                {/*key={laptops.id*/}
                {/* <td>{laptops.id}</td> */}
                <td>{laptops.name}</td>
                <td>{laptops.storage}</td>
                <td>{laptops.manufacturer}</td>
                <td>{laptops.model}</td>
                <td>{laptops.specs}</td>
                <td>{laptops.price}</td>
                <td>{laptops.useCondition}</td>
                <td>{laptops.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendLaptopExecuterComponent;

import { useNavigate } from "react-router-dom";

const WelcomePageComponent = () => {
  const navigate = useNavigate();

  const migrateToLaptops = () => {
    navigate("/laptop-getall");
  };

  const migrateToPhones = () => {
    navigate("/phone-getall");
  };

  const migrateToSpeakers = () => {
    navigate("/laptop-getall");
  };

  return (
    <div className="row">
      <h1 className="text-center"> WELCOME TO SPECS-SPHERE </h1>
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <th>Devices</th>
            <th>Choice</th>
          </thead>
          <tbody>
            <tr>
              <td>Laptops</td>
              <td>
                <button onClick={migrateToLaptops} className="btn btn-info">
                  Go to List
                </button>
              </td>
            </tr>
            <tr>
              <td>Phones</td>
              <td>
                <button onClick={migrateToPhones} className="btn btn-info">
                  Go to List
                </button>
              </td>
            </tr>
            <tr>
              <td>Portable Speakers</td>
              <td>
                <button onClick={migrateToSpeakers} className="btn btn-info">
                  Go to List
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WelcomePageComponent;

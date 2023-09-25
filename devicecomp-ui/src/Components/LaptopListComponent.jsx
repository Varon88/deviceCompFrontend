//react snippets are to be used.
// a http call has not been made in this situation; axios library is to be used. This is installed using the terminal using command npm install axios --save
//react class component snippet that returns its skeleton [rcc]
// import React, { Component, useState, useNavigate } from "react";
// import LaptopService from "../Services/LaptopService";

// class LaptopListComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       laptops: [],
//     }
//     this.addLaptop = this.addLaptop.bind(this);
//   }

//   //every time a component is mounted with a service this should be specified.
//   componentDidMount() {
//     LaptopService.getLaptops().then((res) => {
//       this.setState({ laptops: res.data });
//       //above 2 lines initiates the getlaptop function which has a response and then assigns each value in to the laptops array
//     });
//   }

//   addLaptop(){
//     // this.props.history.push('/laptop-add')
//     const navigate = useNavigate();
//     navigate('/laptop-add');
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="text-center">Laptop List</h2>
//         {/* check what this classname is used for--> */}
//         <div className="row">
//           <button className="btn btn-primary" onClick={this.addLaptop}> Add Laptops </button>
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th>laptopName</th>
//                 <th>laptopStorage</th>
//                 <th>laptopManufacturer</th>
//                 <th>laptopModel</th>
//                 <th>laptopSpecs</th>
//                 <th>laptopPrice</th>
//                 <th>laptopUseCondition</th>
//                 <th>laptopReleaseDate</th>
//               </tr>
//             </thead>

//             <tbody>
//               {this.state.laptops.map((laptops) => (
//                 <tr key={laptops.id}>
//                   <td>{laptops.name}</td>
//                   <td>{laptops.storage}</td>
//                   <td>{laptops.manufacturer}</td>
//                   <td>{laptops.model}</td>
//                   <td>{laptops.specs}</td>
//                   <td>{laptops.price}</td>
//                   <td>{laptops.useCondition}</td>
//                   <td>{laptops.releaseDate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default LaptopListComponent;

/* In a React component's constructor, `props` is an object that represents the properties or props that are passed to the component when it's created. Props allow you to pass data from a parent component to a child component. 

Here's a breakdown of what the code you provided does:

1. `constructor(props)`: This is the constructor of a React component. It takes `props` as an argument. The `props` argument is used to access the properties that are passed to this component when it's used in another component.

2. `super(props)`: In a class constructor, you must call `super(props)` as the first statement. This is necessary because it initializes the component by calling the constructor of the parent class (`React.Component`). It also allows you to access `this.props` within your component.

3. `this.state = { laptops: [] };`: This line initializes the component's state. In React, the `state` is used to store and manage component-specific data that can change over time. In this case, it initializes a state property named `laptops` as an empty array. You can use this state property to store and update data that the component needs to render.

Overall, this constructor is preparing the component to receive and manage data passed via its props and initializes an empty array in its state to store the `laptops` data. Typically, you would fetch data and update the `laptops` state within the component's lifecycle methods or in response to user interactions.*/

//the above version of code is non functional due to the fact that it a class component and not a functional component hence not being able to use the useNavigate function which is the new version of the "this.props.history-push('/add-employee');".

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LaptopService from "../Services/LaptopService";

const LaptopListComponent = () => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();

  const addLaptop = () => {
    navigate("/laptop-add");
  };

  React.useEffect(() => {
    LaptopService.getLaptops().then((res) => {
      setLaptops(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Laptop List</h2>

      <div className="row">
        <button className="btn btn-primary" onClick={addLaptop}>
          Add Laptops
        </button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
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
              <tr key={laptops.id}>
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

export default LaptopListComponent;

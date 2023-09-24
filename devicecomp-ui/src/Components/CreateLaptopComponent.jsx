// import React, { Component } from 'react';



// class CreateLaptopComponent extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//           name: '',
//           storage: '',
//           manufacturer: '',
//           model: '',
//           specs: '',
//           price: '',
//           useCondition: '',
//           releaseDate: ''
//         };
//         this.changeLaptopNameHandler = this.changeLaptopNameHandler.bind(this);
//         this.changeLaptopStorageHandler = this.changeLaptopStorageHandler.bind(this);
//         this.changeLaptopManufacturerHandler = this.changeLaptopManufacturerHandler.bind(this);
//         this.changeLaptopModelHandler = this.changeLaptopModelHandler.bind(this);
//         this.changeLaptopSpecsHandler = this.changeLaptopSpecsHandler.bind(this);
//         this.changeLaptopPriceHandler = this.changeLaptopPriceHandler.bind(this);
//         this.changeLaptopConditionHandler = this.changeLaptopConditionHandler.bind(this);
//         this.changeLaptopReleaseHandler = this.changeLaptopReleaseHandler.bind(this);
//         this.saveLaptop = this.saveLaptop.bind(this);
//       }

//       saveLaptop = (laptop) => {
//         laptop.preventDefault();
//         let laptop = {name: this.state.laptopName, storage: this.state.laptopStorage, manufacturer: this.state.laptopManufacturer, model: this.state.laptopModel, specs: this.state.laptopSpecs, price: this.state.laptopPrice, useCondition: this.state.laptopUseCondition, releaseDate: this.state.laptopReleaseDate}
//         console.log('laptop =>' + JSON.stringify(laptop))
//       }
    
//       changeLaptopNameHandler = (event) => {
//         this.setState ({laptopName: event. target. value});
//       }
//       changeLaptopStorageHandler = (event) => {
//         this.setState ({laptopStorage: event. target. value});
//       }
//       changeLaptopManufacturerHandler = (event) => {
//         this.setState ({laptopManufacturer: event. target. value});
//       }
//       changeLaptopModelHandler = (event) => {
//         this.setState ({laptopModel: event. target. value});
//       }
//       changeLaptopSpecsHandler = (event) => {
//         this.setState ({laptopSpecs: event. target. value});
//       }
//       changeLaptopPriceHandler = (event) => {
//         this.setState ({laptopPrice: event. target. value});
//       }
//       changeLaptopConditionHandler = (event) => {
//         this.setState ({laptopUseCondition: event. target. value});
//       }
//       changeLaptopReleaseHandler = (event) => {
//         this.setState ({laptopReleaseDate: event. target. value});
//       }
   

//     render() {
//         return (
//             <div>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='"card col-md-6 offset-md-3 offset-md-3'>
//                             <h3 className='text-center'> Add Laptops</h3>
//                             <div className='card-body'>
//                                 <form>
//                                     <div className='form-group'>
//                                         <label>Laptop Name: </label>
//                                         <input placeholder='Laptop name' name='laptopName' className='form-control' 
//                                             value={this.state.laptopName} onChange={this.changeLaptopNameHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop Storage: </label>
//                                         <input placeholder='Laptop Storage' name='laptopStorage' className='form-control' 
//                                             value={this.state.laptopStorage} onChange={this.changeLaptopStorageHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop manufacturer: </label>
//                                         <input placeholder='Laptop manufacturer' name='laptopManufacturer' className='form-control' 
//                                             value={this.state.laptopManufacturer} onChange={this.changeLaptopManufacturerHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop model: </label>
//                                         <input placeholder='Laptop model' name='laptopModel' className='form-control' 
//                                             value={this.state.laptopModel} onChange={this.changeLaptopModelHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop specs: </label>
//                                         <input placeholder='Laptop specs' name='laptopSpecs' className='form-control' 
//                                             value={this.state.laptopSpecs} onChange={this.changeLaptopSpecsHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop price: </label>
//                                         <input placeholder='Laptop price' name='laptopPrice' className='form-control' 
//                                             value={this.state.laptopPrice} onChange={this.changeLaptopPriceHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop use conidtion: </label>
//                                         <input placeholder='Laptop UseCondition' name='laptopUseCondition' className='form-control' 
//                                             value={this.state.laptopUseCondition} onChange={this.changeLaptopConditionHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <label>Laptop release date: </label>
//                                         <input placeholder='Laptop ReleaseDate' name='laptopReleaseDate' className='form-control' 
//                                             value={this.state.laptopReleaseDate} onChange={this.changeLaptopReleaseHandler} />
//                                     </div>
//                                     <button className='btn btn-success' onClick={this.saveLaptop}>Save</button>
//                                     <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>Cancel</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default CreateLaptopComponent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateLaptopComponent = () => {
  const [laptopName, setLaptopName] = useState('');
  const [laptopStorage, setLaptopStorage] = useState('');
  const [laptopManufacturer, setLaptopManufacturer] = useState('');
  const [laptopModel, setLaptopModel] = useState('');
  const [laptopSpecs, setLaptopSpecs] = useState('');
  const [laptopPrice, setLaptopPrice] = useState('');
  const [laptopUseCondition, setLaptopUseCondition] = useState('');
  const [laptopReleaseDate, setLaptopReleaseDate] = useState('');
  const navigate = useNavigate();

  const saveLaptop = (event) => {
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

    // TODO: Save the laptop object to the database
    console.log('laptop =>' + JSON.stringify(laptop));
  };

  const cancel = () => {
     navigate('/laptop-getall');
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='"card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'> Add Laptops</h3>
            <div className='card-body'>
              <form onSubmit={saveLaptop}>
                <div className='form-group'>
                  <label>Laptop Name: </label>
                  <input
                    placeholder='Laptop name'
                    name='laptopName'
                    className='form-control'
                    value={laptopName}
                    onChange={(event) => setLaptopName(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop Storage: </label>
                  <input
                    placeholder='Laptop Storage'
                    name='laptopStorage'
                    className='form-control'
                    value={laptopStorage}
                    onChange={(event) => setLaptopStorage(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop manufacturer: </label>
                  <input
                    placeholder='Laptop manufacturer'
                    name='laptopManufacturer'
                    className='form-control'
                    value={laptopManufacturer}
                    onChange={(event) => setLaptopManufacturer(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop model: </label>
                  <input
                    placeholder='Laptop model'
                    name='laptopModel'
                    className='form-control'
                    value={laptopModel}
                    onChange={(event) => setLaptopModel(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop specs: </label>
                  <input
                    placeholder='Laptop specs'
                    name='laptopSpecs'
                    className='form-control'
                    value={laptopSpecs}
                    onChange={(event) => setLaptopSpecs(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop price: </label>
                  <input
                    placeholder='Laptop price'
                    name='laptopPrice'
                    className='form-control'
                    value={laptopPrice}
                    onChange={(event) => setLaptopPrice(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop use conidtion: </label>
                  <input
                    placeholder='Laptop UseCondition'
                    name='laptopUseCondition'
                    className='form-control'
                    value={laptopUseCondition}
                    onChange={(event) => setLaptopUseCondition(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Laptop release date: </label>
                  <input
                    placeholder='Laptop ReleaseDate'
                    name='laptopReleaseDate'
                    className='form-control'
                    value={laptopReleaseDate}
                    onChange={(event) => setLaptopReleaseDate(event.target.value)}
                  />
                </div>
                <button className='btn btn-success' onClick={saveLaptop}>Save</button>
                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px' }}>Cancel</button>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
  );
};

export default CreateLaptopComponent;

import React, { Component } from 'react';



class CreateLaptopComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
          laptops: [],
        };
      }
    

    render() {
        return (
            <div>
                <h1> Laptop Form </h1>
            </div>
        );
    }
}

export default CreateLaptopComponent;
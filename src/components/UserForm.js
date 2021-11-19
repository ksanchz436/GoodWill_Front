import React, { Component } from 'react';
import FormUserDetails from './FormUserDetail';
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from './Confirm';
import Success from './Success';
//this is where the donor things will be--change class to donor

export class UserForm extends Component {
    constructor(props){
        super(props)

    
    this.state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        year: '',
        address: ''
    };
}

        // proceed to next step
        nextStep = () =>{
            const { step } = this.state;
            console.log(step)
            this.setState({
                step: step +1
            });
        };
        
        // go back to previous step
        prevStep = () =>{
            const { step } = this.state;
            this.setState({
                step: step -1
            })
        };

        //Handle fields change
        handleChange = input => e => {
            this.setState({[input]: e.target.value});
        };

    
    render() {
        const { step } = this.state;
        const {firstName, lastName, email, phoneNumber, year, address} = this.state;
        const values = {firstName, lastName, email, phoneNumber, year, address};

        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 2:
                return(
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )

            case 3: 
            return(
                <Success
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            )
            case 4: 
                return <div></div>
                
                
                

                
                default:
        (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default UserForm

//this is where all the details will be added together
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetail';
import FormPersonalDetails from "./FormPersonalDetails";
import { AppBar, TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {Button} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';


export class UserForm extends Component {
    continue=e=> {
        e.prevntDefault();
        //process form send to API using a method //
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values: {firstName, lastName, email, phoneNumber, year, address}} =this.props
        return(
        <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation of Donation"/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                            />
                            <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                            />
                            <ListItem
                            primaryText="Email"
                            secondaryText={email}
                            />
                            <ListItem
                            primaryText="Phone Number"
                            secondaryText={phoneNumber}
                            />
                            <ListItem
                            primaryText="Year"
                            secondaryText={year}
                            />
                            <ListItem
                            primaryText="Address"
                            secondaryText={address}
                            />

                    </List>
                    
                        <br/>
                        <Button
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    
                        />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles= {
    button: {
        margin:15
    }
}

export default UserForm

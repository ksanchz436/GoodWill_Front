import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { AppBar, TextField } from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';
import {Button} from '@material-ui/core';

export class FormUserDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    
    render() {
        const { values,handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
<AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            
            <TextField
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            
            <TextField
              placeholder="Enter Your Phone Number"
              label="Phone Number"
              onChange={handleChange('phone number')}
              defaultValue={values.phoneNumber}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
        );
    }
}

const styles= {
    button: {
        margin:15
    }
}

export default FormUserDetail;


import React, { Component } from 'react';
import FormUserDetails from './FormUserDetail';
import FormPersonalDetails from "./FormPersonalDetails";
import { AppBar, TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import axios from 'axios';

import {Button} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';


export class Success extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts:[]
             
        }
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({
                posts: response.data

            })
            console.log(response.data)
        })

    }
    // continue=e=> {
    //     e.prevntDefault();
    //     //process form send to API using a method //
    //     this.props.nextStep();
    // };
    // back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }
    
    render() {
    
        return(
            <body>

            <div>
                    <h1>Thank You for your donation</h1>
                    <p>you will get an email that summarizes your donation</p>
            </div>
            </body>

        )

}
}

export default Success;

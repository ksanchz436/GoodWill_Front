
import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MaterialTable from '@material-table/core';
import axios from 'axios';







 

function DonationPage (props) {
  const { values,handleChange } = props;

  function clickMe(e){
  
    e.preventDefault();
    props.nextStep();
}

   const [data, setData] = useState([]);
   
//    const continueNext = e () => {
//     e.preventDefault();
//     this.props.nextStep();
// }


    //\\const { values,handleChange } = this.props;

  const columns = [
    { title: "Description", field: "description" },
    { title: "Donor notes for tax records", field: "notes", },
    { title: "Boxes", field: "boxes" },
    { title: "Bags", field: 'bags', },
  ]



  return (


    <div className="App">
      <h1 align="center">Goodwill</h1>
      <h4 align='center'>GoodWill Donation Form</h4>

      <div>
      <button onClick = {clickMe}>
        Submitt
      </button>
      </div>
      
      <MaterialTable
        title="Donations"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
        
      />
  

    </div>

    
  );
}



export default DonationPage;



import React from 'react';
import './tablestyle.css';


const rowstyle={
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.1)"
}


const tablerow=()=>{

    return (<div></div>)
}

const DoctorsTable=()=>{

    return (
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">DOCTOR LIST</th>
            <th scope="col">DEPARTMENT</th>
            <th scope="col">SPECIALIST</th>
            <th scope="col">AGE</th>
            <th scope="col">PHONE NO.</th>
            <th scope="col">APPOINTMENTS</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row" >Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">Default</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr >
            <th scope="row">Primary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr >
            <th scope="row">Secondary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr >
            <th scope="row">Success</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr >
            <th scope="row">Danger</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
         
        </tbody>
      </table> 
    )
}

export default DoctorsTable;
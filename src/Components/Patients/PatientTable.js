import React from 'react';
import User_img from '../../../src/assets/img/user.png';

const PatientsRow=()=>{
    return (

    <li className="table-row ">
      <div className="col col-1">42235</div>
      <div className="col col-2"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>John Doe</div>
      <div className="col col-3" >$350</div>
      <div className="col col-4" >Pending</div>
      <div className="col col-5">Payment Status</div>
      <div className="col col-6">John Doe</div>
      <div className="col col-7" >$350</div>
      <div className="col col-8" ><i class="fa fa-chevron-right text-primary" aria-hidden="true"></i></div>
    </li>
    )
}

const PatientTable=({patients})=>{



    return (


        <ul className="responsive-table pl-0">
            <li className="table-header">
            <div className="col col-1">#</div>
            <div className="col col-2">Patient Name</div>
            <div className="col col-3">Age</div>
            <div className="col col-4">Phone Number</div>
            <div className="col col-5">Address</div>
            <div className="col col-6">City</div>
            <div className="col col-7">Visits</div>
            <div className="col col-8"></div>
            </li>
    
        <PatientsRow/>
        <PatientsRow/>
        <PatientsRow/>
    
        </ul>
    )
}

export default PatientTable;
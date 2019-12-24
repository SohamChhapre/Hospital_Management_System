import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import DoctorsTable from './DoctorsTable'


const DoctorsList=()=>{
    return (
<div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
  <div className>
    <div className="row mx-3 my-4">
      <div className="col-lg-6 col-md-6">
        <h5>Doctor List</h5>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="row">
          <div className="col-sm-8 col-lg-8 col-md-8">
            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="col-sm-4 col-lg-4 col-md-4">
            <button className="btn btn-primary px-4">Add Doctor</button>
          </div>
        </div>
      </div>
    </div>
    <hr style={{marginLeft: '-15px', marginRight: '-15px'}} />
    <div className="row mx-3 my-4">
      <div className="col-lg-12 col-md-12">
        <h5>23 Doctor</h5>
      </div>
    </div>
    <div className="row mx-3 my-4">
      <DoctorsTable/>
    </div>
  </div>
</div>
</div>
</div>
    )
}


export default DoctorsList;
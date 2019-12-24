import React from 'react';

import Input from './Shared/FormComponents/Input'
import Select from './Shared/FormComponents/Select';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'


const Addappointment=()=>{

    const arr=[{
        id:1,
        name:"rohit"
    },{
        id:2,name:"rahul"
    }]

    return(

        <div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
  <form >
    <div className="mx-3 my-4">
      <h5 className="text-bold pb-2 ">ADD APPOINMENT</h5>
     

    
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Patient Name</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" arr={arr} placeholder="Enter Patient name"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Patient Phone Number</label>
           <Input type="text" classname="form-control" placeholder="Enter Patient Phone Number"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Symptoms</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" arr={arr} placeholder="Select blood group"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Assign Doctor</label>
           <Select type="text" classname="form-control" arr={arr} placeholder="Select Doctor"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Select Date and Time</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" placeholder="Enter Email Address"/>
          </div>
        </div>
        
      </div>
      
      
      <div className="mx-auto text-center ">
      <button className="btn btn-primary px-5">Add Appointment</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>

    )
}


export default Addappointment;
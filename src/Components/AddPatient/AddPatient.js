import React from 'react';
import   '../../Components/Shared/CSS/FilePhotoselect.css'
import Input from '../../Components/Shared/FormComponents/Input'
import Select from '../../Components/Shared/FormComponents/Select';
import attach_icon from '../../../src/assets/icons/attach_icon.png'
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';


const AddPatient=()=>{

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
      <h5 className="text-bold pb-2">ADD PATIENT</h5>
      <p className>Personal Details</p>

      <div className="boxProfilePhoto">
        <div className="custom-file">
          <i className="fas fa-camera" />
          <input type="file" className="customFileInput" aria-describedby="inputGroupFileAddon01" />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Patient Name</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" placeholder="Enter Patient name"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Age</label>
           <Input type="number" classname="form-control" placeholder="Enter Patient Age"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Blood Group</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" arr={arr} placeholder="Select blood group"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Phone number</label>
           <Input type="text" classname="form-control" placeholder="Enter Phone number"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Email Address</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="email" classname="form-control" placeholder="Enter Email Address"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>City</label>
           <Input type="text" classname="form-control" placeholder="Select City"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12 col-lg-12  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Address</label>
            {/* <input required type="number" className="form-control" /> */}
            <textarea type="email" className="form-control" rows="2" placeholder="Enter Email Address"/>
          </div>
        </div>
        
      </div>
      <p className>Medical Details</p>
        <div className="row">
        <div className="col">
        <div className="">
            <p>Documents</p>

            <label for="inputfile" class="text-primary">
            <img src={attach_icon} width="12px" height="12px" style={{paddingRight:"2px"}}/>
           Attach Documents
            <input type="file" name="file" id="inputfile" style={{opacity: "0"}}  multiple />
            
        </label>
       

        </div>
        </div>
      </div>
      <div className="mx-auto text-center">
      <button className="btn btn-primary px-5">Add Patient</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>
    )
}


export default AddPatient;
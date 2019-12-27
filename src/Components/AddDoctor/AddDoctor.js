import React from 'react';
import   '../../Components/Shared/CSS/FilePhotoselect.css'
import Input from '../../Components/Shared/FormComponents/Input'
import Select from '../../Components/Shared/FormComponents/Select';
import attach_icon from '../../../src/assets/icons/attach_icon.png';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import {Link,NavLink} from 'react-router-dom';
import user_img from '../../../src/assets/img/user.png'

const AddDoctor=()=>{

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
      <h5 className="text-bold pb-2">ADD DOCTER</h5>
      <p className>Personal Details</p>

      <div className="boxProfilePhoto">
        <div className="custom-file">
        <img src={user_img} class="img-fluid rounded-circle" />

        <label for="imgfile" className="" style={{position: "absolute",top: "50%",left: "50%"}}>   <input type="file" id="imgfile" className="" style={{opacity:0,width:0}} aria-describedby="inputGroupFileAddon01" />
          <i class="fa fa-picture-o" aria-hidden="true"></i>
        </label>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Doctor Name</label>
            <Input type="text" classname="form-control" placeholder="Enter Doctor name"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Date of Birth</label>
           <Input type="date" classname="form-control" placeholder="Date of Birth"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Blood Group</label>
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
            <textarea type="email" className="form-control" rows="2" placeholder="Enter Email Address"/>
          </div>
        </div>
        
      </div>
      <p className>Personal Details</p>
        <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Specialization</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select arr={arr} type="text" classname="form-control" placeholder="Select Specialization"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Department</label>
           <Select arr={arr} type="text" classname="form-control" placeholder="Select Department"/>
          </div>
        </div>
      </div>
    <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Designation</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" placeholder="Enter Designation"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Work Experience</label>
           <Input type="date" classname="form-control" placeholder="Enter Work Experience"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="form-group">
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
       <button  exact to="/addDoctor" className="btn btn-primary px-5">Add Doctor</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>

    )
}


export default AddDoctor;
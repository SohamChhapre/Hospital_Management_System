import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import User_img from '../../../src/assets/img/user.png'
import age_icon from '../../../src/assets/icons/age.png'
import call_icon from '../../../src/assets/icons/call.png'
import location_icon from '../../../src/assets/icons/location.png'
import city_icon from '../../../src/assets/icons/city.png'
import share_icon from '../../../src/assets/icons/share.png'
import download_icon from '../../../src/assets/icons/download_1.png'
import '../Dashboard/CSS/AppointmentHistoryStyle.css'
import attach_icon from '../../../src/assets/icons/attachment.png'
import arrow_icon from '../../../src/assets/icons/back.png'
import gender_icon from '../../../src/assets/icons/gender.png'
import Select from '../../Components/Shared/FormComponents/Select'
import Input from '../../Components/Shared/FormComponents/Input'
import home_icon from '../../../src/assets/icons/home-page.png';
import breadcrum_icon from '../../../src/assets/icons/breadcrumb-arrow.png';



const AppointmentDetails=()=>{

        return (
             <div className="collapse table-row row mx-0 " id="bar">
                    <div className="col pl-2">
                   <div className="font-weight-bold" style={{fontSize: "13px"}}>Symptoms</div>
                    <p className="py-0">hello</p>
                    <p className="py-0">Diaheria</p> 
                    </div>
                    
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Diagnosis</div>
                    </div>
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Prescription</div>
                    </div>
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Attachment</div></div>
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Note</div>
                    </div>
                    </div> 

    )
}

const AppointmentRow=()=>{
    return (<div>
            <li className="table-row">
            <div className="col col-1">Date</div>
            <div className="col col-2"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>John Doe</div>
            <div className="col col-3">Status</div>
            <div className="col col-4 text-center"><img src={attach_icon} className="mr-2" height="14px"/></div>
            <div className="col col-5"><img src={share_icon} className="mr-3" height="14px"/>
            <img src={download_icon} className="mr-2" height="14px"/></div>
            <div className="col col-6"><a data-toggle="collapse" data-target="#bar" ><img src={arrow_icon} className="mr-2" height="18px"/></a></div>
                           
            </li>
           <AppointmentDetails/>
                    </div>

    )
}


const AppointmentHistory=()=>{

    return (
            <ul className="appointment_history-table pl-0" >
            <li className="table-header">
            <div className="col col-1">Date</div>
            <div className="col col-2">Patient Details</div>
            <div className="col col-3">Status</div>
            <div className="col col-4">Attachment</div>
            <div className="col col-5">Action</div>
            <div className="col col-6"></div>
            
            </li>
    
       <AppointmentRow/>
       <AppointmentRow/>
       <AppointmentRow/>
       <AppointmentRow/>
       
    
        </ul>

    )
}
const PersonalDetail=({handleid})=>{
    const arr=[{id:1,name:"rahul"},{id:2,name:"rohit"}]

    return(
          <form className="w-100">
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Date of Joining </label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control"  placeholder="Enter Patient name" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Date of Birth</label>
           <Input type="text" classname="form-control" placeholder="Enter Patient Phone Number"/>
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
            <label>Email Address</label>
           <Input type="text" classname="form-control"  placeholder="Select Doctor"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Specialist</label>
            
          </div>
        </div>
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Department</label>
            <Select arr={arr} classname="form-control"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Specialist</label>
            
          </div>
        </div>
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Work Experience</label>
            <Input  classname="form-control"/>
          </div>
        </div>
      </div>
      
      
     
      <div className="mx-auto text-center ">
      <button className="btn btn-outline-primary px-5 mr-4" onClick={()=>{
          handleid("")
      }}>back</button>
      <button className="btn btn-primary px-5">Save</button>
      </div>
    </form> 

    )
}

const DoctorDetails=({id,handleid})=>{

    const [toggle,setToggle]=useState(true)
      console.log("Patient Details")

    return(
             <div className>
             <div className="row bg-white px-2 py-1">
            <img src={home_icon} className="my-auto" height="15px" onClick={()=>{handleid("")}}/><img src={breadcrum_icon} height="10px" className="mx-2 my-auto"/> <div className="text-primary">{id}</div> 
             </div>
          <div className="row mx-3 my-4">
           
            <div className="col-sm-2 col-md-2">
                    <img src={User_img} height="85px" className="rounded-circle"/>
                </div>
            <div className="col-sm-10 col-md-10">
                <div className="row">
                    <h5>Dr. Messy Williams <img src={gender_icon} height="15px"/></h5>
                     <div className="" style={{position: "absolute",right: "10px",top: "10px"}}>
                     <img src={share_icon} className="mr-2" width="20px"/>
                      <img src={download_icon} className="mr-2" width="20px"/>
                    </div>
                </div>
            <div className="row">
                <div className="col pl-0">
                <img src={age_icon} width="20px" className="mr-2"/>19 Years
                </div>
                <div className="col">
                <img src={call_icon} className="mr-2" width="20px"/> 9304084343</div>
                <div className="col">
                <img src={location_icon} className="mr-2" height="15px"/>Nrk biz park   </div>
                <div className="col">
                <img src={city_icon} className="mr-2" height="15px"/>London</div>
            </div>
            
            </div>
            </div>
          
          <div className="row mx-3 my-4">
            <div className="col-lg-12 col-md-12">
              <div className="row">
              <div className="col-md-2 col-sm-2 "><div className="font-weight-bold" style={{ borderBottom: toggle ? "2px solid blue" :'none'}} onClick={()=>setToggle(true)}>Personal Details</div></div>
              <div className="col-sm-3 col-md-3 "><div className="font-weight-bold" style={{ borderBottom: !toggle ? "2px solid blue" :'none'}} onClick={()=>setToggle(false)} >Appointment Details</div></div>
              <div className="col">
              <Link to="addAppointment" className="btn btn-primary" style={{position: "absolute",right: "5px",top: "0px"}}>Add Appointment</Link>
              </div>
              </div>
            </div>
          </div>
          <div className="row mx-3 my-4">
            
            {toggle? ( <PersonalDetail handleid={handleid}/>) : (<AppointmentHistory />) }
          </div>
        </div>

    )
}


export default DoctorDetails;
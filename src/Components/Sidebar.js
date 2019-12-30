import React from 'react';
import heart from '../../src/assets/icons/heartbeat.png'
import notepad from '../../src/assets/icons/notepad.png'
import patient_icon from '../../src/assets/icons/File.png'
import doctor from '../../src/assets/icons/doctor.png'
import appointment from '../../src/assets/icons/healthcare-and-medical.png'
import medical from '../../src/assets/icons/medical.png'
import {Link ,NavLink} from 'react-router-dom'

const Sidebar=()=>{
    return (
    <div className="col-lg-2 col-md-2 col-sm-12">

    <ul className="list-group list-group-flush my-3 ">
        <NavLink  to="/dashboard" style={{ textDecoration: 'none',color:"black" ,outline:"none"}} activeStyle={{color:"blue"}}>  <li className="list-group-item my-1" style={{border:0,paddingRight:0}}><img src={heart} className="mr-3" />Dashboard</li></NavLink>
        <NavLink to="/doctors" style={{ textDecoration: 'none',color:"black" ,outline:"none"}} activeStyle={{color:"blue"}}>  <li className="list-group-item my-1" style={{border:0,paddingRight:0}}><img src={notepad}  className="mr-3" width="20px"/>Doctor List</li></NavLink>
        <NavLink to="/patients" style={{ textDecoration: 'none',color:"black",outline:"none" }} activeStyle={{color:"blue"}}>  <li className="list-group-item my-1" style={{border:0,paddingRight:0}}><img src={patient_icon}  className="mr-3"/>Patient List</li></NavLink>
        <NavLink to="/addDoctor" style={{ textDecoration: 'none',color:"black",outline:"none" }} activeStyle={{color:"blue"}}> <li className="list-group-item my-1" style={{border:0,paddingRight:0}}><img src={doctor}  className="mr-3"/>Add Doctor</li></NavLink>
        <NavLink to="/addAppointment" style={{ textDecoration: 'none',color:"black",outline:"none" }} activeStyle={{color:"blue"}} > <li className="list-group-item my-1" style={{border:0,paddingRight:0}}><img src={appointment}  className="mr-3"/>Add Appointment</li></NavLink>
        <NavLink to="/addPatient" style={{ textDecoration: 'none',color:"black",outline:"none" }} activeStyle={{color:"blue"}}>  <li className="list-group-item my-1" style={{border:0,paddingRight:0}}><img src={medical}  className="mr-3"/>Add Patient</li></NavLink>
   </ul> 
  </div>

    )
}

export default Sidebar;
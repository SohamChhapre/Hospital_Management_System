import React,{useEffect,useState} from 'react';
import './CSS/AppointmentStyle.css'
import User_img from '../../../src/assets/img/user.png'
import Axios from 'axios'
import {config,ApiUrl} from '../Shared/Config'
import arrow_icon from '../../../src/assets/icons/back.png'

const AppointmentRow=({appointment:{doctor_data,patient_data,datetime},handleid})=>{

    return (
            <li className="table-row" style={{borderLeft:"4px solid green"}} onClick={()=>{handleid("23")}}>
      <div className="col-sm-4 ml-3"><img src={`${ApiUrl}${patient_data.profile_picture}`} className="rounded-circle mr-2" width="40px"  height="40px" alt="User"/>{patient_data.name}
<p className="text-muted ml-5 my-0">{patient_data.phone}</p></div>
                <div className="col-sm-2 ml-3">{datetime.date}
            <p className="text-muted my-0">{datetime.time}</p></div>
      <div className="col-sm-4 ml-3" ><img src={`${ApiUrl}${doctor_data.profile_picture}`} className="rounded-circle mr-2" width="40px" height="40px" alt="User"/>{doctor_data.name}<p className="text-muted ml-5 my-0">{doctor_data.department.name}</p></div>
      <div className="col-sm-2 ml-3 my-auto" ><img src={arrow_icon} className="my-auto" height="22px"/></div>
     
      
    </li>

    )
}

const AppointmentsTable=({handleid})=>{

        const [appointments,setAppointments]=useState([])

        useEffect(()=>{
            const getappointment=async ()=>{
                Axios.get(`${ApiUrl}/appointment/`,config).then((res)=>{
                    console.log(res)
                    setAppointments(res.data.data)
                }).catch((err)=>{
                    console.log(err);
                })
            }
            getappointment()
        },[])

    return (
        
        <div className="col-lg-9 col-md-9 col-sm-6 my-2">
                
             <ul className="appointment-table pl-0">
            <li className="table-header">
            <div className="col-sm-4 ml-3">Patient Detail</div>
            <div className="col-sm-2 ml-3">Date</div>
            <div className="col-sm-4 ml-3">Doctor Detail</div>
            <div className="col-sm-2 ml-3"></div>
            </li>
    {appointments && appointments.length>0 && appointments.map((e,i)=>(<AppointmentRow handleid={handleid} appointment={e} />) ) }
        
    
        </ul>
        </div>
    )
}


export default AppointmentsTable;
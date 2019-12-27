import React from 'react';
import './CSS/AppointmentStyle.css'
import User_img from '../../../src/assets/img/user.png'


const AppointmentRow=()=>{

    return (
            <li className="table-row" style={{borderLeft:"4px solid green"}}>
      <div className="col-sm-4 ml-3"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>John Doe</div>
      <div className="col-sm-2 ml-3">26 Dec 2019</div>
      <div className="col-sm-4 ml-3" ><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>John Doe</div>
      <div className="col-sm-2 ml-3" ></div>
     
      
    </li>

    )
}

const AppointmentsTable=()=>{

    return (
        
        <div className="col-lg-9 col-md-9 col-sm-6 my-2">
                
             <ul className="appointment-table pl-0">
            <li className="table-header">
            <div className="col-sm-4 ml-3">Patient Detail</div>
            <div className="col-sm-2 ml-3">Date</div>
            <div className="col-sm-4 ml-3">Doctor Detail</div>
            <div className="col-sm-2 ml-3"></div>
            </li>
    
        <AppointmentRow/>
        <AppointmentRow/>
        <AppointmentRow/>
    
        </ul>
        </div>
    )
}


export default AppointmentsTable;
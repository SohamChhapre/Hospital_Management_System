import React from 'react';
import appoinments_logo from '../../../src/assets/icons/total_appointments.png'
import patients_logo from '../../../src/assets/icons/patients.png'
import avg_patient_logo from '../../../src/assets/icons/avg_patients.png'


const DashboardHeader=(total_appointment,total_patients,avg_patient)=>{
    return (
<div className="col-lg-9 col-md-9 col-sm-6">
      <div className="card-columns mt-2">
        <div className="card bg-white">
          <div className="card-body">
            <div className="row mx-auto">
            <img src={appoinments_logo} className="my-auto" height="30px" width="30px"/>
           <div className="mx-auto"> <h3>150</h3>
            Total Appointments
            </div>
           </div>
          </div>
        </div>
        
          <div className="card bg-white">
          <div className="card-body">
            <div className="row mx-auto">
            <img src={patients_logo} className="my-auto" height="30px" width="30px"/>
           <div className="mx-auto"> <h3>150</h3>
            Total Patients
            </div>
           </div>
          </div>
        </div>  <div className="card bg-white">
          <div className="card-body">
            <div className="row mx-auto">
            <img src={avg_patient_logo} className="my-auto" height="30px" width="30px"/>
           <div className="mx-auto"> <h3>150</h3>
            Avg. Patients per doctor
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default DashboardHeader;
import React from 'react';
import DashboardHeader from './DashboardHeader'
import DashboardRightIndex from './DashboardRightIndex';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import AppointmentsTable from './AppointmentsTable';
import PatientDetails from './SubComponents/PatientDetails'



const Dashboard=()=>{

    return (
      <div>
      <Navbar issearch={true}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
          {/* <div className="row mx-3 my-4">
            <DashboardHeader/>
            <AppointmentsTable/>
            <DashboardRightIndex/>
          </div> */}
          <PatientDetails/>
      </div>
      </div>
</div>

    )
}

export default Dashboard;
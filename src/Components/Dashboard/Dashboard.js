import React from 'react';
import DashboardHeader from './DashboardHeader'
import DashboardRightIndex from './DashboardRightIndex';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import AppointmentsTable from './AppointmentsTable';
import PatientDetails from './SubComponents/PatientDetails'
import {Route} from 'react-router-dom';

const DashboardContainer=()=>{

  return(
    <div className="row mx-3 my-4">
            <DashboardHeader/>
            <AppointmentsTable/>
            <DashboardRightIndex/>
          </div>
  )
}

const Dashboard=()=>{

    return (
      <div>
      <Navbar issearch={true}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
          
          <Route exact path="/dashboard" component={(props)=><DashboardContainer/>}/>
          <Route exact path="/dashboard/:name" component={(props)=><PatientDetails/>}/>
          
          
          {/* <PatientDetails/> */}
      </div>
      </div>
</div>

    )
}

export default Dashboard;
import React,{useState} from 'react';
import DashboardHeader from './DashboardHeader'
import DashboardRightIndex from './DashboardRightIndex';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import AppointmentsTable from './AppointmentsTable';
import PatientTable from '../../Components/Patients/PatientTable'
import PatientDetails from './SubComponents/PatientDetails'
import {Route,Redirect} from 'react-router-dom';

const DashboardContainer=()=>{
console.log("dashboard COntainer")
  return(
    <div className="row mx-3 my-4">
            <DashboardHeader/>
            <AppointmentsTable/>
            <DashboardRightIndex/>
          </div>
  )
}

const Dashboard=()=>{

      const [name,setName]=useState("")
      const [id,setId]=useState("")

    onchange=(e,fieldname)=>{
        if(fieldname=="name"){
          setName(e.target.value)
          if (name){

          }
        }
        else{
          setId(e.target.value)
        }
    }
    console.log("InDashboard");

    return (
      <div>
      <Navbar issearch={true} name={name} id={id} onchange={onchange} />
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
          
          <Route exact path="/dashboard" component={(props)=><DashboardContainer/>}/>
          <Route exact path="/dashboard/:name" component={(props)=><PatientTable />}/>
          <Route exact path="/dashboard/:name/:id" component={(props)=><PatientDetails/>}/>
          


      </div>
      </div>
</div>

    )
}

export default Dashboard;
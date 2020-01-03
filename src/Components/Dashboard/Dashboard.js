import React,{useState,useEffect} from 'react';
import DashboardHeader from './DashboardHeader'
import DashboardRightIndex from './DashboardRightIndex';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import AppointmentsTable from './AppointmentsTable';
import PatientTable from '../../Components/Patients/PatientTable'
import PatientDetails from './SubComponents/PatientDetails'
import {Route,Redirect,Switch} from 'react-router-dom';
import {PatientsJSON} from '../Patients/PatientsJSON'

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

const Dashboard=({match})=>{

      const [name,setName]=useState("")
      const [id,setId]=useState("")
      const [patients,setPatients]=useState([])
      const [router,setRouter]=useState("")

    useEffect(()=>{
        console.log("Useeffect>>>>>>>>>")
        setPatients(PatientsJSON)
        console.log("amtch in dashboard",match)
    },[])
    onchange=(e,fieldname)=>{
      console.log(e.target.value,fieldname)
        if(fieldname=="name"){
              setName(e.target.value);
              console.log("in if",e.target.value)
              setRouter("Patienttable")
        }
        else {
          setId(e.target.value)
          console.log(id)
          setRouter("Patienttable")
        }
        if(name==="" && id===""){
          setRouter("Dashboard")
        }
    }
    console.log("InDashboard");

    return (
      <div>
      <Navbar issearch={true}  onchange={onchange} />
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12" style={{backgroundColor:"#F1F4F6"}}>
          <Switch>
          { name  && <Redirect exact to={`/dashboard/${name}`} />} 
          {id && <Redirect exact to={`/dashboard/${id}`} />}
           <Route exact path="/dashboard" component={(props)=><DashboardContainer {...props}/>}/>
          <Route exact path="/dashboard/:name" component={(props)=><PatientTable name={name} patients={patients} handleroute={setRouter} {...props}  />}/>
          
          <Route exact path="/dashboard/:name/:id" component={(props)=><PatientDetails id={id}  {...props} />} />
           { !name  && !id && <Redirect exact to='/dashboard' />} 

          
         

          </Switch>
      </div>
      </div>
</div>

    )
}

export default Dashboard;
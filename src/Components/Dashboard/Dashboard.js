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
import Axios from 'axios';
import {config,ApiUrl} from '../Shared/Config'
import home_icon from '../../../src/assets/icons/home-page.png';
import breadcrum_icon from '../../../src/assets/icons/breadcrumb-arrow.png';

const DashboardContainer=({data,handleid})=>{
console.log("dashboard COntainer")
  return(
    <div className="row mx-3 my-4">
            <DashboardHeader data={data}/>
            <AppointmentsTable handleid={handleid}/>
            <DashboardRightIndex data={data} />
          </div>
  )
}

const Dashboard=({match})=>{

      const [name,setName]=useState("")
      const [id,setId]=useState("")
      const [patients,setPatients]=useState([])
      const [routerid,setRouterid]=useState("")
      const [data,setData]=useState({})
      
    useEffect(()=>{
        const getDashboard=async ()=>{
          await Axios.get(`${ApiUrl}/hospital/dashboard`,config).then((res)=>{
            console.log(res)
            setData(res.data.data)
            // setRouter("")
          }).catch((err)=>{
            console.log(err)
          })
        }
        getDashboard()
        setPatients(PatientsJSON)
        console.log("amtch in dashboard",match)
    },[])
       
    onchange=(e,fieldname)=>{
      console.log(e.target.value,fieldname)
        if(fieldname=="name"){
              setName(e.target.value);
              console.log("in if",e.target.value)
        }
        else {
          setId(e.target.value)
          console.log(id)
        }  
    }
   const handlenameid=(name,id)=>{
        setName(name)
        setId(id)
        // setRouterid(routerid)
        console.log(name,id,"home ")
    }
    console.log("InDashboard");

    return (
      <div>
      <Navbar issearch={true}  onchange={onchange} name={name} id={id}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12" style={{backgroundColor:"#F1F4F6"}}>
          
           
          
          {/* { name  && <Redirect exact to={`/dashboard/${name}`} />}  */}
          
          {/* {id && <Redirect exact to={`/dashboard/${id}`} />} */}
          {routerid && <Redirect exact to={`/dashboard/${routerid}`}/> }
          <Route exact path="/dashboard">
           { !name && !id && <DashboardContainer data={data} handleid={setRouterid}  />}
            { (name || id) &&  <div><div className="row bg-white px-2 py-1">
            <img src={home_icon} className="my-auto" height="15px" onClick={()=>{handlenameid("","")}}/><img src={breadcrum_icon} height="10px" className="mx-2 my-auto"/> <div className="text-primary">D{name}</div> 
             </div>
             <PatientTable name={name} patients={patients} handlenameid={handlenameid} handleid={setRouterid} />
             </div>}
          </Route>
            
            
         <Route exact path="/dashboard/:id" component={(props)=><PatientDetails  handlenameid={handlenameid} {...props} />} />

            
            {( (!id && !name))   && <Redirect exact to='/dashboard' />}


          {/* <Route exact path="/dashboard/:name" component={(props)=><PatientTable name={name} patients={patients} handleid={setRouter} handleroute={setRouter} {...props}  />}/> */}
          
         

         
      </div>
      </div>
</div>

    )
}

export default Dashboard;
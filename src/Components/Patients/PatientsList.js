import React,{useState,useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import {NavLink,Link,Redirect} from 'react-router-dom';
import '../../Components/Shared/CSS/TableStyle.css';
import User_img from '../../../src/assets/img/user.png';
import PatientTable from './PatientTable';
import {PatientsJSON} from './PatientsJSON';
import Axios from 'axios';
import {ApiUrl,config} from '../Shared/Config'


const PatientsList=({match})=>{
  const patients=PatientsJSON;
  const [searchname,setSearchname]=useState("")
  const [id,setId]=useState("")
  const [name,setName]=useState("")
  useEffect(()=>{
      const getPatients=async ()=>{
      await Axios.get(`${ApiUrl}/patient/list/`,config)
      .then((response)=>{
        console.log("patient list",response)
      })
      .catch((err)=>{

        console.log("ERROR",err)
      })
      
      }
      getPatients()
  },[])
  const handleid=(id,name)=>{
        setName(name);
        setId(id)
        
  }
    return (
      <div>
      { id && <Redirect exact to={`/dashboard/${name}/${id}`} />}
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>

        <div className="col-lg-10 col-md-10 col-sm-12 " style={{backgroundColor:"#F1F4F6"}}>
            <div >
              <div className="row mx-3 my-4">
                <div className="col-lg-6 col-md-6">
                  <h5>Patient List</h5>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="row">
                    <div className="col-sm-8 col-lg-8 col-md-8">
                      <input type="text" className="form-control" id="email" placeholder="Search Patient Name or ID" name="email" />
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4">
                      <Link to="/addPatient" className="btn btn-primary px-4">Add Patient</Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{marginLeft: '-15px', marginRight: '-15px'}} />
              <div className="row mx-3 my-4">
                <div className="col-lg-12 col-md-12">
                  <h5>23 Patients</h5>
                </div>
              </div>
              <div className="row mx-3 my-4">
              
              <PatientTable patients={patients} handleid={handleid}/>

              </div>
            </div>
          </div>
          </div>
</div>
    )
}


export default PatientsList;
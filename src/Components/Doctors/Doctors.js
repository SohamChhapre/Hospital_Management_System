import React,{useState,useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import DoctorsTable from './DoctorsTable'
import {Link, NavLink} from 'react-router-dom';
import DoctorDetails from './DoctorDetails'
import {DoctorsJSON} from './DoctorsJSON';
import {ApiUrl,config} from '../Shared/Config';
import Axios from 'axios';
import loader_img from '../../assets/img/loader.gif'


const DoctorsList=({handleid})=>{
          const [total_doctors,setTotaldoctors]=useState("")
          const [doctors,setDoctors]=useState([]);
          const [doctorsTemp,setDoctorsTemp]=useState([])
          const [nameid,setNameID]=useState("");

    useEffect( ()=>{
      // setDoctors(DoctorsJSON);
      // setDoctorsTemp(DoctorsJSON)
      
      const fetchData = async () => {
       await Axios.get(`${ApiUrl}/doctor/list/`,config)
      .then((response)=>{
          console.log("doctor",response.data)
          setTimeout(() => {
          setTotaldoctors(response.data.total_doctor);
            
          }, 50);
          let doctors=response.data.data
          setDoctors(doctors);
          setDoctorsTemp(doctors);
      })
      
    };
    fetchData();
    },[])

   


    const SortBy=(which)=>{
      let doctorstemp=doctors;
      setDoctorsTemp([])
      console.log("In sort")
      doctorstemp.sort((a,b)=> {return a[which]>b[which]});
      setTimeout(() => {
        setDoctorsTemp(doctorstemp)
      }, 1);

      console.log(doctors);
    }
  return(

    <div >
          <div className="row mx-3 my-4">
            <div className="col-lg-6 col-md-6">
              <h5>Doctor List</h5>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-sm-8 col-lg-8 col-md-8">
                  <input type="text" className="form-control" id="email" placeholder="Search Doctor by name or ID" name="email" onChange={(e)=>{
                    setNameID(e.target.value);
                    let temp=e.target.value;
                    let filterdoc=doctors.filter((d, i) => {
                      return d.name.toLowerCase().indexOf(temp.toLowerCase())>-1 || String(d.id).indexOf(temp.toLowerCase())>-1
                      });
                    setDoctorsTemp(filterdoc);

                  }}/>
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4">
                  <Link to="/addDoctor" className="btn btn-primary px-4">Add Doctor</Link>
                </div>
              </div>
            </div>
          </div>
          <hr style={{marginLeft: '-15px', marginRight: '-15px'}} />
          <div className="row mx-3 my-4">
            <div className="col-lg-12 col-md-12">
            <h5>{total_doctors} Doctors</h5>
            </div>
          </div>
          <div className="row mx-3 my-4">
            { !total_doctors && <div className="text-center mx-auto"><img src={loader_img} /></div> }
            {total_doctors && <DoctorsTable doctors={doctorsTemp} SortBy={SortBy} handleid={handleid}/>}
          </div>
        </div>
  )
}


const Doctors=()=>{
    const [did,setDid]=useState("");
    const handleid=(id)=>{

      setTimeout(() => {
      setDid(String(id))
        
        console.log("handleid",did)
      }, 2);
    }
    return (
<div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 " style={{backgroundColor:"#F1F4F6"}}>
            {did && did?<DoctorDetails id={did} handleid={handleid}/>:<DoctorsList handleid={handleid}/>}
</div>
</div>
</div>
    )
}


export default Doctors;
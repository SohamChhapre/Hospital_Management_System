import React,{useState,useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import DoctorsTable from './DoctorsTable'
import {Link, NavLink} from 'react-router-dom';
import DoctorDetails from './DoctorDetails'
import {DoctorsJSON} from './DoctorsJSON';


const DoctorsList=({handleid})=>{
          const [doctors,setDoctors]=useState([]);
          const [doctorsTemp,setDoctorsTemp]=useState([])
          const [nameid,setNameID]=useState("");

    useEffect(()=>{
      let doctors=DoctorsJSON
      setDoctors(doctors);
      setDoctorsTemp(doctors);
      console.log("In use Effect",doctors);
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

    <div className>
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
                      return d.name.toLowerCase().indexOf(temp.toLowerCase())>-1 || d.id.toLowerCase().indexOf(temp.toLowerCase())>-1
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
              <h5>23 Doctor</h5>
            </div>
          </div>
          <div className="row mx-3 my-4">
            <DoctorsTable doctors={doctorsTemp} SortBy={SortBy} handleid={handleid}/>
          </div>
        </div>
  )
}


const Doctors=()=>{
    const [did,setDid]=useState("");
    const handleid=(id)=>{
      setDid(id);
    }
    return (
<div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
            {did && did?<DoctorDetails id={did} handleid={handleid}/>:<DoctorsList handleid={handleid}/>}
</div>
</div>
</div>
    )
}


export default Doctors;
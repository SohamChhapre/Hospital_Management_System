import React,{useState,useEffect} from 'react';
import Datetime from 'react-datetime';
import Input from './Shared/FormComponents/Input'
import Select from './Shared/FormComponents/Select';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import './Shared/CSS/DatetimeStyle.css';
import  './Shared/CSS/InputTagsStyle.css';
import Axios from 'axios';
import {ApiUrl,config} from './Shared/Config' 


const AppointmentJSON={
  patient:{},
  phone:"",
  symptoms:"",
  doctor:{},
  time:""
}

const Addappointment=()=>{
  const [appointment,setAppointment]=useState(AppointmentJSON);
  const [patients,setPatients]=useState([])
  const [doctors,setDoctors]=useState([])

    const arr=[{
        id:1,
        name:"rohit"
    },{
        id:2,name:"rahul"
    }]
    useEffect(()=>{
       const getdata= async ()=>{
          Axios.get(`${ApiUrl}/hospital/details/`,config).then((response)=>{
            console.log(response,response.data.data.doctor);
            setDoctors(response.data.data.doctor);
            setPatients(response.data.data.patient)
          })
        }
      getdata()
    },[])
    const Submitform=(e)=>{
        e.preventDefault()
        console.log(appointment);
        let data=new FormData()
        data.append("payload",JSON.stringify(appointment))
        Axios.post(`${ApiUrl}/appointment/`,data,config).then((response)=>{
            console.log(response)
        }).catch((err)=>{
          console.log(err)
        })
    }

    return(

        <div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12" style={{backgroundColor:"#F1F4F6"}}>
  <form onSubmit={(e)=>Submitform(e)}>
    <div className="mx-3 my-4">
      <h5 className="text-bold pb-2 ">ADD APPOINMENT</h5>
   
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Patient Name</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" isreq={true} arr={patients} name=" Patient " onChangehandler={(e)=>{
              let k=e.target.value.split("$")
             setAppointment({...appointment,patient:{id:k[0],name:k[1]}});
             console.log(appointment,e.target.value);
           }} onChangeValid={(e)=>{
                  if(!e.target.value){
                    return "Select Name"
                  }
           }}/>

          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Patient Phone Number</label>
           <Input type="tel" classname="form-control" isreq={true} placeholder="Enter Patient Phone Number" onChangehandler={(e)=>{
             setAppointment({...appointment,phone:e.target.value});
             console.log(appointment);
           }} 
           onChangeValid={(e)=>{
                var phoneno = /^\d{10}$/
                if(!e.target.value.match(phoneno)){
                  return "Invalid Phone Number"
                }
           }} />
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Symptoms</label>
            
            {/* <input data-role="tagsinput" id="tags" className="form-control" type="text"/> */}
            <Input type="text" classname="form-control" isreq={true} placeholder="Enter Comma seperated Symptoms " onChangehandler={(e)=>{
             setAppointment({...appointment,symptoms:e.target.value});
             console.log(appointment);
           }} 
           onChangeValid={(e)=>{   
             console.log("jshdbf")
           }}  />
            {/* <Select type="text"  classname="form-control" arr={arr} /> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Assign Doctor</label>
           <Select type="text" classname="form-control" arr={doctors} isreq={true} name="Doctor" onChangehandler={(e)=>{
             let k=e.target.value.split("$")
             setAppointment({...appointment,doctor:{id:k[0],name:k[1]}});
             console.log(appointment,e.target.value);
           }} onChangeValid={(e)=>{
                  if(!e.target.value){
                    return "Select Doctor"
                  }
           }}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Select Date and Time</label>
            {/* <input required type="number" className="form-control" /> */}
            <Datetime inputProps={{ placeholder: 'DD-MM-YYYY  | HH:MM A'}} required={true} dateFormat="DD-MM-YYYY|" onChange={(e)=>{
              setAppointment({...appointment,time:e});
              console.log(e)
            }}/>
            {/* <Input type="text" classname="form-control" placeholder="Enter Email Address"/> */}
          </div>
        </div>
      </div>
      
      
      <div className="mx-auto text-center ">
      <button className="btn btn-primary px-5" type="submit" >Add Appointment</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>

    )
}


export default Addappointment;



      
    
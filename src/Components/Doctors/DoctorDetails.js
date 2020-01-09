import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import User_img from '../../../src/assets/img/user.png'
import age_icon from '../../../src/assets/icons/age.png'
import call_icon from '../../../src/assets/icons/call.png'
import location_icon from '../../../src/assets/icons/location.png'
import city_icon from '../../../src/assets/icons/city.png'
import share_icon from '../../../src/assets/icons/share.png'
import download_icon from '../../../src/assets/icons/download_1.png'
import '../Dashboard/CSS/AppointmentHistoryStyle.css'
import attach_icon from '../../../src/assets/icons/attachment.png'
import arrow_icon from '../../../src/assets/icons/back.png'
import gender_icon from '../../../src/assets/icons/gender.png'
import Select from '../../Components/Shared/FormComponents/Select'
import Input from '../../Components/Shared/FormComponents/Input'
import home_icon from '../../../src/assets/icons/home-page.png';
import breadcrum_icon from '../../../src/assets/icons/breadcrumb-arrow.png';
import Axios from 'axios';
import {config,ApiUrl} from '../Shared/Config';
import Datetime from 'react-datetime';


const AppointmentDetails=({prescriptions,document,notes,symptoms,diagnosis})=>{

        return (
             <div className="table-row row mx-0 " id="bar">
                    <div className="col pl-2">
                   <div className="font-weight-bold" style={{fontSize: "13px"}}>Symptoms</div>
                    {symptoms && symptoms.length>0 && symptoms.map((e,i)=>(<div  key={i}><p className="py-0 mb-0">{e}</p></div>))}
                    <p className="py-0">Diaheria</p> 
                    </div>
                    
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Diagnosis</div>
                    {diagnosis && diagnosis.length>0 && diagnosis.map((e,i)=>(<p className="py-0 mb-0" key={i}>{e}</p>))}
                    
                    </div>
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Prescription</div>
                    {prescriptions && prescriptions.length>0 && prescriptions.map((e,i)=>(<p className="py-0 mb-0" key={i}>{e}</p>))}
                    
                    </div>
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Attachment</div>
                    {document && document.length>0 && document.map((e,i)=>(<p className="py-0 mb-0" key={i}>{e.name}</p>))}
                    
                    </div>
                    
                    <div className="col pl-2">
                    <div className="font-weight-bold" style={{fontSize: "13px"}}>Note
                    </div>
                   <p className="py-0" >{notes}</p>
                    
                    </div>
                    </div> 

    )
}

const AppointmentRow=({appointment:{appointment_id,diagnosis,doctor_data,patient_data,status,symptoms,datetime,notes,prescriptions,document},toggleid,handletoggle})=>{
      
      let istrue=false
      if(appointment_id===toggleid){
               istrue=true
              }
    console.log(diagnosis,document)
    return (<div>
            <li className="table-row">
            <div className="col col-1" style={{paddingLeft:'14px',fontSize:"13px"}}>{datetime.date}
            <p style={{color:"grey"}}>{datetime.time}</p></div>
            <div className="col col-2"><img src={`${ApiUrl}${patient_data.profile_picture}`} className=" rounded-circle mr-2" width="40px" height="40px" alt="User"/>{patient_data.name}</div>
            <div className="col col-3"><div className="rounded-circle btn btn-sm" style={{color: 'red',width:'10px',height:"10px"}}></div>{status}</div>
            <div className="col col-4 text-center"><img src={attach_icon} className="mr-2" height="14px"/></div>
            <div className="col col-5"><img src={share_icon} className="mr-3" height="14px"/>
            <img src={download_icon} className="mr-2" height="14px"/></div>
            <div className="col col-6"><a  onClick={()=>{
              if(toggleid===appointment_id){
                handletoggle("")
              }
              else{
              handletoggle(appointment_id)

              }
            }} ><img src={arrow_icon} className="mr-2" height="18px"/></a></div>
                           
            </li>
           { istrue && <AppointmentDetails prescriptions={prescriptions} symptoms={symptoms} document={document} notes={notes} diagnosis={diagnosis}/>}
                    </div>
    )
}


const AppointmentHistory=({id})=>{
 
  const [appointments,setAppointments]=useState([])
  const [toggleid,setToggleid]=useState("")
  
  useEffect(()=>{
    const getAppointment=async ()=>{
      await Axios.get(`${ApiUrl}/appointment/doctor/${id}`,config).then((res)=>{
        console.log("res",res)
        setAppointments(res.data.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    getAppointment()
  },[])
    return (
            <ul className="appointment_history-table pl-0" >
             { !appointments.length &&
              <div className="text-center text-danger">No appointments to display</div>
            }

            { appointments.length>0 &&
            <li className="table-header">
            <div className="col col-1">Date</div>
            <div className="col col-2">Patient Details</div>
            <div className="col col-3">Status</div>
            <div className="col col-4">Attachment</div>
            <div className="col col-5">Action</div>
            <div className="col col-6"></div>
            
            </li>
}
           
      {appointments && appointments.length>0 && appointments.map((e,i)=><AppointmentRow handletoggle={setToggleid} appointment={e} key={i} toggleid={toggleid}/>)}
       
       
    
        </ul>

    )
}
const PersonalDetail=({id,handleid,doctor})=>{
    const arr=[{id:1,name:"rahul"},{id:2,name:"rohit"}]
    const [doctorup,setDoctorup]=useState({...doctor})
    console.log(doctorup,doctor)
    useEffect(()=>{
      setDoctorup(doctor)
      
    console.log("use effect",doctorup,doctor)

    },[doctor])
    return(
          <form className="w-100">
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Date of Joining </label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" value={doctorup.doj}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Date of Birth</label>
           <Datetime defaultValue={doctorup.dob}  dateFormat="DD-MM-YYYY" timeFormat={false} />
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Blood Group</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" arr={arr} placeholder="Select blood group" value={doctorup.blood_group}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Email Address</label>
           <Input type="text" classname="form-control"  placeholder="Select Doctor" value={doctorup.email} />
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Specialist</label>
            <div >
            <div  className="btn btn-light ">
          Messages 
            </div>
            <div  className="btn btn-light mx-1">
          Messages 
            </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Department</label>
            <Select arr={arr} classname="form-control" value={doctorup.department}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Designation</label>
            
            <div>
            <div  className="btn btn-light ">
          Messages 
            </div>
            <div  className="btn btn-light mx-1">
          Messages 
            </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Work Experience</label>
            <Input  classname="form-control" type="number" value={doctorup.experience}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col pr-lg-4 pr-md-4">
          <div className="form-group">
           Documents
           <div className="row ml-1">
            <label for="inputfile"><img src={attach_icon} width="12px" height="12px" style={{paddingRight:"2px"}}/></label>
            <input type="file" name="file" id="inputfile" style={{opacity: "0",height:"0" ,width:"0"}}  onChange={e=>{console.log("sfs")}} multiple />
            <div className="text-primary"> Md-Certificate,</div>
            <div className="text-primary"> DM-Certificate</div>
            </div>
          </div>
          </div>
        </div>
      
      
     
      <div className="mx-auto text-center ">
      <button className="btn btn-outline-primary px-5 mr-4" onClick={()=>{
          handleid("")
      }}>back</button>
      <button className="btn btn-primary px-5">Save</button>
      </div>
    </form> 

    )
}

const DoctorDetails=({id,handleid})=>{

    const [doctor,setDoctor]=useState({})
    const [toggle,setToggle]=useState(true)
      console.log("doctor Details")
    useEffect(()=>{
        const getdoctordata=async ()=>{
          await Axios.get(`${ApiUrl}/doctor/${id}`,config).then((res)=>{
            console.log(res,res.data.data);
            
            setDoctor(res.data.data)

          }).catch((err)=>{
            console.log(err);
          })
        }
        getdoctordata()

    },[])

    return(
             <div >
             <div className="row bg-white px-2 py-1">
            <img src={home_icon} className="my-auto" height="15px" onClick={()=>{handleid("")}}/><img src={breadcrum_icon} height="10px" className="mx-2 my-auto"/> <div className="text-primary">D{id}</div> 
             </div>
          <div className="row mx-3 my-4">
           
            <div className="col-sm-2 col-md-2">
                    <img src={`${ApiUrl}${doctor.profile_picture}`} height="85px" width="85px" className="rounded-circle"/>
                </div>
            <div className="col-sm-10 col-md-10">
                <div className="row">
                    <h5>{doctor.name} </h5>
                     <div className="" style={{position: "absolute",right: "10px",top: "10px"}}>
                     <img src={share_icon} className="mr-2" width="20px"/>
                      <img src={download_icon} className="mr-2" width="20px"/>
                    </div>
                </div>
            <div className="row">
                <div className="col pl-0">
                <img src={age_icon} width="20px" className="mr-2"/>{doctor.age} Years
                </div>
                <div className="col">
                <img src={call_icon} className="mr-2" width="20px"/> {doctor.phone}</div>
                <div className="col">
                <img src={location_icon} className="mr-2" height="15px"/>{doctor.address}   </div>
                <div className="col">
                <img src={city_icon} className="mr-2" height="15px"/>{doctor.city}</div>
            </div>
            
            </div>
            </div>
          
          <div className="row mx-3 my-4">
            <div className="col-lg-12 col-md-12">
              <div className="row">
              <div className="col-md-2 col-sm-2 "><div className="" style={{ borderBottom: toggle ? "2px solid blue" :'none', color: toggle ? "black" :'grey',cursor:"pointer"}} onClick={()=>setToggle(true)}>Personal Details</div></div>
              <div className="col-sm-3 col-md-3 "><div className="" style={{ borderBottom: !toggle ? "2px solid blue" :'none',color: !toggle ? "black" :'grey',cursor:"pointer"}} onClick={()=>setToggle(false)} >Appointment Details</div></div>
              <div className="col">
              <Link to="addAppointment" className="btn btn-primary" style={{position: "absolute",right: "5px",top: "0px"}}>Add Appointment</Link>
              </div>
              </div>
            </div>
          </div>
          <div className="row mx-3 my-4">
            
            {toggle? ( <PersonalDetail handleid={handleid} doctor={doctor}/>) : (<AppointmentHistory id={id} />) }
          </div>
        </div>

    )
}


export default DoctorDetails;
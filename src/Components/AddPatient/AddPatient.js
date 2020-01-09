import React ,{useState,useEffect} from 'react';
import   '../../Components/Shared/CSS/FilePhotoselect.css'
import Input from '../../Components/Shared/FormComponents/Input'
import Select from '../../Components/Shared/FormComponents/Select';
import attach_icon from '../../../src/assets/icons/attach_icon.png'
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import {NavLink,Link} from 'react-router-dom';
import user_img from '../../../src/assets/img/user.png'
import {Patient_JSON,Blood_group} from './PatientJSON';
import {ApiUrl,config} from '../Shared/Config';
import Axios from 'axios';
import {useAlert} from 'react-alert'


const AddPatient=()=>{
    const [patientobj,setPatientobj]=useState(Patient_JSON);
    const [preview_url,setPreviewUrl]=useState("");
    const [filesname,setFilesname]=useState([])
        const Alert = useAlert()

    const arr=[{
        id:1,name:"Rahul"
    },{
        id:2,name:"Rohit"
    },{
      id:3,name:"Ronit"
    }]
    useEffect(()=>{
        
    },[patientobj])
    
  
    const onFileChange = e => {
        e.preventDefault();
      if(e.target.name==='profileimg'){
        console.log(e.target.files,e.target.name);
        const file = e.target.files[0];
        setPatientobj({...patientobj,profile_picture:file})
          const reader = new FileReader();
          reader.onload = upload => {
            setPreviewUrl(upload.target.result);
          };
          reader.readAsDataURL(file);
          
      }
      else{
          let files=e.target.files;
          var temp=[];
          console.log(files)
          for(let i=0;i<files.length;i++){
                temp.push(files[i].name)
          }
          setPatientobj({...patientobj,documents:files})
          setFilesname(temp);
      }
        }
    const Removefile=(i)=>{
      console.log(i,"event",filesname)
      let files=[...filesname]
      console.log(files)
      files.splice(i,1)
      let x=[...patientobj.documents]
      x.splice(i,1)
      console.log("after splice",files)
      setFilesname(files)
      setPatientobj({...patientobj,documents:x})
      console.log("documents",filesname)
      console.log("patients doc",patientobj.documents)
    
    }

    const handlesubmit=(e)=>{
      e.preventDefault();
      let payload = {...patientobj}
      delete payload.documents;
      delete payload.profile_picture
      let files = patientobj.documents
      let profile_picture=patientobj.profile_picture
      let data=new FormData()
      data.append("payload",JSON.stringify(payload));
      // data.append("documents",files);
      data.append("profile_picture",profile_picture)
      for(let i=0;i<files.length ;i++){
        data.append(files[i].name,files[i])
      }
      Axios.post(`${ApiUrl}/patient/`,data,config).then((response)=>{
        console.log(response);
        Alert.show(response.data.message, {
        timeout: 5000,
        type: 'success',
      })
      setFilesname([])
      setPreviewUrl("")
      setPatientobj(Patient_JSON)
      }).catch((err)=>{
        console.log(err);
        Alert.show('Something went Wrong', {
        timeout: 5000,
        type: 'error',
      })
      })
      console.log(patientobj);
    }

    return(
      <div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12" style={{backgroundColor:"#F1F4F6"}}>
  <form onSubmit={handlesubmit} >
    <div className="mx-3 my-4">
      <h5 className="text-bold pb-2">ADD PATIENT</h5>
      <p className>Personal Details</p>

     <div className="boxProfilePhoto">
        <div className="custom-file">
        <img src={preview_url} className="img-fluid h-100 w-100 rounded-circle" />

        <label htmlFor="imgfile" className="" style={{position: "absolute",top: "50%",left: "50%"}}>   
        <input type="file" id="imgfile" name="profileimg" className="" required={true} style={{opacity:0,width:0}} aria-describedby="inputGroupFileAddon01" onChange={e=>onFileChange(e)}/>
          <i className="fa fa-picture-o" style={{color:"grey"}} aria-hidden="true"></i>
        </label>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Patient Name</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" required={true}  placeholder="Enter Patient name" isreq={true} onChangehandler={(e)=>{
             setPatientobj({...patientobj,name:e.target.value});
             console.log(patientobj);
           }} 
           onChangeValid={(e)=>{
                if(!e.target.value){
                  return "Invalid Patient Name"
                }
           }}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Age</label>
           <Input type="number" classname="form-control" isreq={true} placeholder="Enter Patient Age" onChangehandler={(e)=>{
             setPatientobj({...patientobj,age:e.target.value});
             console.log(patientobj);
           }} 
           onChangeValid={(e)=>{
                if(!e.target.value || e.target.value<0){
                  return "Invalid age"
                }
           }}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Blood Group</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" isreq={true} name="Blood Group" arr={Blood_group} placeholder="Select blood group" onChangehandler={(e)=>{
             setPatientobj({...patientobj,blood_group:e.target.value.split("$")[1]});
             console.log(patientobj);
           }} 
           onChangeValid={(e)=>{
                if(!e.target.value){
                  return "Invalid Blood Group"
                }
           }}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Phone number</label>
           <Input type="text" classname="form-control" isreq={true} placeholder="Enter Phone number" onChangehandler={(e)=>{
             setPatientobj({...patientobj,phone:e.target.value});
             console.log(patientobj);
           }} 
           onChangeValid={(e)=>{
                var phoneno = /^\d{10}$/
                if(!e.target.value.match(phoneno)){
                  return "Invalid Phone Number"
                }
           }}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Email Address</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="email" classname="form-control" isreq={true} placeholder="Enter Email Address" onChangehandler={(e)=>{
             setPatientobj({...patientobj,email:e.target.value});
             console.log(patientobj);
           }}  onChangeValid={(e)=>{

           }}
             />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>City</label>
           <Input type="text" classname="form-control" isreq={true} placeholder="Enter City" onChangehandler={(e)=>{
             setPatientobj({...patientobj,city:e.target.value});
             console.log(patientobj);
           }}  onChangeValid={(e)=>{
           }}/>
          </div>
        </div>
      </div><div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Gender</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" isreq={true} name="gender" arr={[{id:1,name:"M"},{id:2,name:"F"},{id:3,name:"O"}]} placeholder="Select blood group" onChangehandler={(e)=>{
             setPatientobj({...patientobj,gender:e.target.value.split("$")[1]});
             console.log(patientobj);
           }} 
           onChangeValid={(e)=>{
                if(!e.target.value){
                  return "Invalid gender"
                }
           }}/>
          </div>
        </div>
        </div>
      <div className="row my-4">
        <div className="col-md-12 col-lg-12  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Address</label>
            {/* <input required type="number" className="form-control" /> */}
            <textarea type="text" className="form-control" rows="2" placeholder="Enter Address" onChange={(e)=>{
             setPatientobj({...patientobj,address:e.target.value});
             console.log(patientobj);
           }} />
          </div>
        </div>
        
      </div>
      <p className>Medical Details</p>
        <div className="row">
        <div className="col">
        <div className="">
            <p>Documents</p>

            <label htmlFor="inputfile" className="text-primary">
            <img src={attach_icon} width="12px" height="12px" style={{paddingRight:"2px"}}/>
           Attach Documents
            <input type="file" name="file" id="inputfile" style={{opacity: "0"}}  onChange={e=>onFileChange(e)} multiple />
            
        </label>
       <p>
            {filesname && filesname.length>0?
              filesname.map((e,i)=>(
                <div key={i} type="button" className="btn btn-secondary mx-1 my-1">
                  {e} <span className="badge badge-light" onClick={()=>{Removefile(i)}}>X</span>
                </div>
              )) 
            :null}
          </p>
        </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-5">
      <button className="btn btn-primary px-5" type="submit">Add Patient</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>
    )
}


export default AddPatient;
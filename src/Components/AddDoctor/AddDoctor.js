import React,{useEffect,useState} from 'react';
import   '../../Components/Shared/CSS/FilePhotoselect.css'
import Input from '../../Components/Shared/FormComponents/Input'
import Select from '../../Components/Shared/FormComponents/Select';
import attach_icon from '../../../src/assets/icons/attach_icon.png';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import {Link,NavLink} from 'react-router-dom';
import user_img from '../../../src/assets/img/user.png'
import Datetime from 'react-datetime';
import {Blood_group} from '../AddPatient/PatientJSON';
import { useAlert } from 'react-alert'
import {ApiUrl,config} from '../Shared/Config';
import Axios from 'axios';

const doctorData={
  name:"",
  dob:"",
  blood_group:"",
  phone:"",
  email:"",
  city:"",
  address:"",
  specialization:[],
  experience:"",
  designation:"",
  documents:[],
  profile_picture:"",
  department:""

}

const AddDoctor=()=>{
    const [doctordata,setDoctordata]=useState({});
    const [preview_url,setPreviewUrl]=useState("");
    const [documents,setDocuments]=useState([])
    const [departments,setDepartments]=useState([])
    const Alert = useAlert()
  
    useEffect(()=>{
        setDoctordata(doctorData);
        const getdepartment=async ()=>{
          await Axios.get(`${ApiUrl}/department/list`,config).then((res)=>{
            console.log(res.data.data)
            setDepartments(res.data.data)
          }).catch((err)=>{
            console.log(err)
          })
        }
        getdepartment() 
    },[])
  const handlesubmit=(e)=>{
      e.preventDefault();
      let payload = {...doctordata}
      delete payload.documents;
      delete payload.profile_picture
      let files = doctordata.documents
      let profile_picture=doctordata.profile_picture
      let data=new FormData()
      data.append("payload",JSON.stringify(payload));
      // data.append("documents",files);
      data.append("profile_picture",profile_picture)
      for(let i=0;i<files.length ;i++){
        data.append(files[i].name,files[i])
      }
      Axios.post(`${ApiUrl}/doctor/`,data,config).then((response)=>{
        console.log(response);
        Alert.show(response.data.message, {
        timeout: 5000,
        type: 'success',
      })
      setDoctordata(doctorData)
      }).catch((err)=>{
        console.log(err);
        Alert.show("Something went wrong", {
        timeout: 6000,
        type: 'error',
      })
      })
      console.log(doctordata);
    }
   
      const onFileChange = e => {
        e.preventDefault();
          if(e.target.name==='profile_img'){
            console.log(e.target.files,e.target.name);
            const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = upload => {
                setPreviewUrl(upload.target.result);
              };
              reader.readAsDataURL(file);
              setDoctordata({...doctordata,profile_picture:file})
          }
      else{
          let files=e.target.files;
          var temp=[];
          console.log(files)
          for(let i=0;i<files.length;i++){
                temp.push(files[i].name)
          }
          setDoctordata({...doctordata,documents:files})
          setDocuments(temp);
      }
        }
    const Removefile=(i)=>{
      let files=[...documents]
      files.splice(i,1)
      let x=[...doctordata.documents]
      x.splice(i,1)
      setDocuments(files)
      setDoctordata({...doctordata,documents:x})
    }

    return(

       <div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 " style={{backgroundColor:"#F1F4F6"}}>
  <form onSubmit={handlesubmit}>
    <div className="mx-3 my-4">
      <h5 className="text-bold pb-2">ADD DOCTER</h5>
      <p className>Personal Details</p>

      <div className="boxProfilePhoto">
        <div className="custom-file">
        <img src={preview_url} class="img-fluid rounded-circle h-100 w-100" />

          <label for="imgfile" className="" style={{position: "absolute",top: "50%",left: "50%"}}>   
          <input type="file" id="imgfile" name="profile_img" style={{opacity:0,width:0}} aria-describedby="inputGroupFileAddon01" onChange={e=>onFileChange(e)} />
            <i class="fa fa-picture-o" style={{color:"grey"}} aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Doctor Name</label>
            <Input type="text" classname="form-control" isreq={true}  placeholder="Enter Doctor name" onChangehandler={(e)=>{
                setDoctordata({...doctordata,name:e.target.value});
            }} onChangeValid={(e)=>{
              if(!e.target.value){
                return "Invalid Doctor Name"
              }
            }}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Date of Birth</label>
           <Datetime inputProps={{ placeholder: "DD-MM-YYYY"}} required  dateFormat="DD-MM-YYYY" timeFormat={false} onChange={(e)=>{
              setDoctordata({...doctordata,dob:e});
              console.log(e)
            }}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Blood Group</label>
            <Select type="text" classname="form-control" isreq={true}  arr={Blood_group} placeholder="Select blood group" onChangehandler={(e)=>{
              setDoctordata({...doctordata,blood_group:e.target.value.split("$")[1]})
            }}  onChangeValid={(e)=>{ 
              if(!e.target.value ){
                return "Invalid Blood Group"
              }
            }}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Phone number</label>
           <Input type="tel" classname="form-control" isreq={true}  placeholder="Enter Phone number" onChangehandler={(e)=>{
             setDoctordata({...doctordata,phone:e.target.value});
             console.log(doctordata);
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
            <Input type="email" classname="form-control" isreq={true}  placeholder="Enter Email Address" onChangehandler={(e)=>{
              setDoctordata({...doctordata,email:e.target.value})
            }}  onChangeValid={(e)=>{ 
              if(!e.target.value){
                return "Invalid Email"
              }
            }}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>City</label>
           <Input type="text" classname="form-control" isreq={true} placeholder="Select City" onChangehandler={(e)=>{
              setDoctordata({...doctordata,city:e.target.value})
            }}  onChangeValid={(e)=>{ 
              if( !e.target.value && !doctordata.city){
                return "Invalid City"
              }
            }}/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12 col-lg-12  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Address</label>
            <textarea type="email" className="form-control" rows="2" placeholder="Enter Email Address" onChange={(e)=>{
              setDoctordata({...doctordata,address:e.target.value})
            }}/>
          </div>
        </div>
        
      </div>
      <p className>Personal Details</p>
        <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Specialization</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input  type="text" classname="form-control" isreq={true} placeholder="Enter Specialization" onChangehandler={(e)=>{
                  setDoctordata({...doctordata,specialization:e.target.value});
            }} onChangeValid={(e)=>{
              if(!e.target.value){
                return "Invalid Specialization"
              }
            }}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Department</label>
           <Select arr={departments} type="text" isreq={true} classname="form-control" placeholder="Select Department" onChangehandler={(e)=>{
             let k=e.target.value.split("$")
             setDoctordata({...doctordata,department:{id:k[0],name:k[1]}})
           }} onChangeValid={(e)=>{
             if(!e.target.value){
               return "Invalid Department"
             }
           }} 
           />
          </div>
        </div>
      </div>
    <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Designation</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" isreq={true} placeholder="Enter Designation" onChangehandler={(e)=>{
              setDoctordata({...doctordata,designation:e.target.value})
            }}  onChangeValid={(e)=>{ 
              if(!e.target.value){
                return "Invalid Designation"
              }
            }}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Work Experience</label>
           <Input type="number" classname="form-control" isreq={true} placeholder="Enter Work Experience" onChangehandler={(e)=>{
              setDoctordata({...doctordata,experience:e.target.value})
            }}  onChangeValid={(e)=>{ 
              if(!e.target.value){
                return "Invalid Years of Experience"
              }
            }}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="form-group">
            <p>Documents</p>
        <label for="inputfile" class="text-primary">
            <img src={attach_icon} width="12px" height="12px" style={{paddingRight:"2px"}}/>
           Attach Documents
            <input type="file" name="file" id="inputfile" style={{opacity: "0"}}  onChange={e=>onFileChange(e)} multiple />
            
        </label>
       <p>
            {documents && documents.length>0?
              documents.map((e,i)=>(
                <div key={i} type="button" className="btn btn-secondary mx-1 my-1">
                  {e} <span className="badge badge-light" onClick={()=>{Removefile(i)}}>X</span>
                </div>
              )) 
            :null}
          </p>

        </div>
        </div>
      </div>
      <div className="mx-auto text-center">
       <button  exact to="/addDoctor" className="btn btn-primary px-5" type="submit">Add Doctor</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>

    )
}


export default AddDoctor;
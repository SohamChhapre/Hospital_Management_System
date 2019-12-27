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
 

const AddPatient=()=>{
    const [patientobj,setPatientobj]=useState(Patient_JSON);
    const [preview_url,setPreviewUrl]=useState("");
    const [documents,setDocuments]=useState([])

    const arr=[{
        id:1,name:"Rahul"
    },{
        id:2,name:"Rohit"
    },{
      id:3,name:"Ronit"
    }]

    
  //   useEffect(()=>{
  // },[])
    //  useEffect(()=>{
    //        },
    //        [documents])
    const onFileChange = e => {
        e.preventDefault();
      if(e.target.name==='profileimg'){
        console.log(e.target.files,e.target.name);
        const file = e.target.files[0];
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
          setDocuments(temp);
      }
        }
    const Removefile=(i)=>{
      console.log(i,"event",documents)
      let files=[...documents]
      console.log(files)
      files.splice(i,1)
      console.log("after splice",files)
      setDocuments(files)
      console.log("documents",documents)
    
    
    }

    const onChange=()=>{

    }

    return(
      <div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
  <form >
    <div className="mx-3 my-4">
      <h5 className="text-bold pb-2">ADD PATIENT</h5>
      <p className>Personal Details</p>

     <div className="boxProfilePhoto">
        <div className="custom-file">
        <img src={preview_url} className="img-fluid h-100  rounded-circle" />

        <label htmlFor="imgfile" className="" style={{position: "absolute",top: "50%",left: "50%"}}>   
        <input type="file" id="imgfile" name="profileimg" className="" style={{opacity:0,width:0}} aria-describedby="inputGroupFileAddon01" onChange={e=>onFileChange(e)}/>
          <i className="fa fa-picture-o" aria-hidden="true"></i>
        </label>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Patient Name</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="text" classname="form-control" placeholder="Enter Patient name"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Age</label>
           <Input type="number" classname="form-control" placeholder="Enter Patient Age"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Blood Group</label>
            {/* <input required type="number" className="form-control" /> */}
            <Select type="text" classname="form-control" name="Blood Group" arr={Blood_group} placeholder="Select blood group"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>Phone number</label>
           <Input type="text" classname="form-control" placeholder="Enter Phone number"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-6  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Email Address</label>
            {/* <input required type="number" className="form-control" /> */}
            <Input type="email" classname="form-control" placeholder="Enter Email Address"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label>City</label>
           <Input type="text" classname="form-control" placeholder="Select City"/>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12 col-lg-12  pr-lg-4 pr-md-4">
          <div className="form-group">
            <label>Address</label>
            {/* <input required type="number" className="form-control" /> */}
            <textarea type="email" className="form-control" rows="2" placeholder="Enter Email Address"/>
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
      <div className="mx-auto text-center mt-5">
      <button className="btn btn-primary px-5">Add Patient</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>
    )
}


export default AddPatient;
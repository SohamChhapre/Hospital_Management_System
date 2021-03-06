import React,{useEffect} from 'react';
import User_img from '../../../src/assets/img/user.png';
import {PatientsJSON} from './PatientsJSON';
import {ApiUrl} from '../Shared/Config'


const PatientsRow=({patient:{id,name,age,phone,city,address,visits,profile_picture},handleid})=>{
    return (

    <li className="table-row " onClick={ ()=>{handleid(id)
        console.log("In row",id)}
}>
      <div className="col col-1">{id}</div>
      <div className="col col-2"><img src={`${ApiUrl}${profile_picture}`} className=" rounded-circle mr-2" width="40px" height="40px" alt="User"/>{name}</div>
      <div className="col col-3" >{age}</div>
      <div className="col col-4" >{phone}</div>
      <div className="col col-5">{address}</div>
      <div className="col col-6">{city}</div>
      <div className="col col-7" >{visits}</div>
      <div className="col col-8" > <i className="fa fa-chevron-right text-primary" aria-hidden="true"></i> </div>
    </li>
    )
}

const PatientTable=({patients,handleid,match,handleroute})=>{

        // console.log("match",match)
        // const patient=PatientsJSON
        const SortBy=()=>{

        }
        useEffect(()=>{
            console.log("Patients table",match)
        },)

    return (
        <ul className="patients-table pl-0 mt-2">
            <li className="table-header">
            <div className="col col-1" >#</div>
            <div className="col col-2">Patient Name</div>
            <div className="col col-3">Age</div>
            <div className="col col-4">Phone Number</div>
            <div className="col col-5">Address</div>
            <div className="col col-6">City</div>
            <div className="col col-7">Visits</div>
            <div className="col col-8"></div>
            </li>
    
    {patients && patients.length>0 && patients.map((e,i)=>(<PatientsRow key={i} id={e.id} handleid={handleid} patient={e} />))}
        {/* <PatientsRow/>
        <PatientsRow/>
        <PatientsRow/> */}
    
        </ul>
    )
}

export default PatientTable;
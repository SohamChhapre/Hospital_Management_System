import React,{useEffect} from 'react';
import User_img from '../../../src/assets/img/user.png';
import {PatientsJSON} from './PatientsJSON';

const PatientsRow=({id,name,age,phone,city,address,visits,handleid})=>{
    return (

    <li className="table-row " onClick={ ()=>{handleid(id,name)
        console.log("In row",id)}
}>
      <div className="col col-1">{id}</div>
      <div className="col col-2"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>{name}</div>
      <div className="col col-3" >{age}</div>
      <div className="col col-4" >{phone}</div>
      <div className="col col-5">{address}</div>
      <div className="col col-6">{city}</div>
      <div className="col col-7" >{visits}</div>
      <div className="col col-8" ><i className="fa fa-chevron-right text-primary" aria-hidden="true"></i></div>
    </li>
    )
}

const PatientTable=({patients,handleid,match})=>{

        // console.log("match",match)
        const patient=PatientsJSON
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
    
    {patient && patient.length>0 && patient.map((e,i)=>(<PatientsRow key={i} id={e.id} handleid={handleid} name={e.name} age={e.age} phone={e.phone_no} address={e.address} city={e.city} visits={e.visits} />))}
        {/* <PatientsRow/>
        <PatientsRow/>
        <PatientsRow/> */}
    
        </ul>
    )
}

export default PatientTable;
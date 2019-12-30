import React from 'react';
import User_img from '../../../src/assets/img/user.png';

const PatientsRow=({id,name,age,phone,city,address,visits})=>{
    return (

    <li className="table-row">
      <div className="col col-1">{id}</div>
      <div className="col col-2"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>{name}</div>
      <div className="col col-3" >{age}</div>
      <div className="col col-4" >{phone}</div>
      <div className="col col-5">{address}</div>
      <div className="col col-6">{city}</div>
      <div className="col col-7" >{visits}</div>
      <div className="col col-8" ><i class="fa fa-chevron-right text-primary" aria-hidden="true"></i></div>
    </li>
    )
}

const PatientTable=({patients})=>{

        console.log("patient table")

        const SortBy=()=>{

        }

    return (


        <ul className="patients-table pl-0">
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
    
    {patients && patients.length>0 && patients.map((e,i)=>(<PatientsRow id={e.id} name={e.name} age={e.age} phone={e.phone_no} address={e.address} city={e.city} visits={e.visits} />))}
        {/* <PatientsRow/>
        <PatientsRow/>
        <PatientsRow/> */}
    
        </ul>
    )
}

export default PatientTable;
import React from 'react';

import User_img from '../../../src/assets/img/user.png';



const DoctorsRow=({doctor:{id,name,department,phone,specializations,appointments,age},handleid})=>{

  return (
     <li className="table-row" onClick={()=>{
       handleid(id)
     }} style={{borderLeft:"4px solid green"}}>
      <div className="col col-1">{id}</div>
      <div className="col col-2"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>{name}</div>
<div className="col col-3" >{department}</div>
<div className="col col-4" >{specializations && specializations.length>0 && specializations.map((e,i)=>(<React.Fragment key={i}>{e.name} </React.Fragment>))}</div>
      <div className="col col-5">{age}</div>
<div className="col col-6">{phone}</div>
<div className="col col-7" >{appointments}</div>
      <div className="col col-8" ><i class="fa fa-chevron-right text-primary" aria-hidden="true"></i></div>
    </li>
  )
}
const DoctorsTable=({doctors,SortBy,handleid})=>{
  console.log(doctors);
  

    return (
        <ul className="responsive-table pl-0" >
            <li className="table-header">
            <div className="col col-1" onClick={()=>SortBy("id")} >#</div>
            <div className="col col-2" onClick={()=>SortBy("name")}>Doctor Name</div>
            <div className="col col-3" onClick={()=>SortBy("department")} >Department</div>
            <div className="col col-4" >Specialist</div>
            <div className="col col-5" onClick={()=>SortBy("age")}>Age</div>
            <div className="col col-6" >Phone Number</div>
            <div className="col col-7" onClick={()=>SortBy("appointments")}>Appointments</div>
            <div className="col col-8"></div>
            </li>
    
    {doctors && doctors.length>0 && doctors.map((e,i)=>(<DoctorsRow key={i} doctor={e} handleid={handleid}/>))}

      
    
        </ul>
    )
}

export default DoctorsTable;
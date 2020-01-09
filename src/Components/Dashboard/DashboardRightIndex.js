import React,{useEffect,useState} from 'react';
import doctor_img from '../../../src/assets/icons/avg_patients.png'
import operations_logo from '../../../src/assets/icons/operations.png'
import no_of_patients_logo from '../../../src/assets/icons/no_of_patients.png'
// import Chart from 'react-chartjs-2'
import {Doughnut,Line} from 'react-chartjs-2';
import {ApiUrl} from '../Shared/Config'

const DashboardRightIndex=({data})=>{
    console.log("in right index",data)
    const [bestdoc,setBestdoc]=useState("")
    const [stats,setStats]=useState({})
   useEffect(()=>{
       
      setBestdoc(data.best_doc)
      setStats(data.AdmByDiv)
     
   },[data])
   let label=[]
   let statsdata=[]
   if(stats){
     for(let i=0;i<stats.length;i++){
       label.push(stats[i].name)
        statsdata.push(stats[i].total)
     }
   }
   const state = {
  labels:label,
  datasets: [
    {
      label: 'Admission by department',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: statsdata
    }
  ]
}

        return (
            <div className="col-lg-3 col-md-3 col-sm-6 my-2">
              { bestdoc && <div className="card  mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-body">
                  <p className="card-title bg-primary text-white rounded-right">Doctor of the month</p>
                  <div className="card-text text-center">
                    <img src={`${ApiUrl}${bestdoc.doctor.profile_picture}`} className="mx-auto rounded-circle" height="45px" width="45px"/>
                    <div>{bestdoc.doctor.name}</div>
                      <small className="text-secondary">{bestdoc.doctor.department.name}</small>
                  </div>
                </div>
                <div className="card-footer">
                <div className="row">
                <div className="mx-auto">
                <img src={operations_logo}  className="" height="30px" width="30px"/>
                  <div className=""> <div>12</div>
                    Operations
                    </div>
                </div>
                <div className="mx-auto"> 
                      <img src={no_of_patients_logo } height="30px" width="30px"/>
                <div className="mx-auto"> <div>{bestdoc.total}</div>
                        Patients
                </div>
                </div>
                

                </div>
                </div>
              </div>}
              <div className="card  mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-body">
                 
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Admission By Division',
              fontSize:10
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
                </div>
              </div>
            </div>
        )
}

export default DashboardRightIndex;
import React from 'react';
import doctor_img from '../../../src/assets/icons/avg_patients.png'
import operations_logo from '../../../src/assets/icons/operations.png'
import no_of_patients_logo from '../../../src/assets/icons/no_of_patients.png'
// import Chart from 'react-chartjs-2'
import {Doughnut,Line} from 'react-chartjs-2';


const DashboardRightIndex=()=>{
   const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
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
      data: [65, 59, 80, 81, 56]
    }
  ]
}

        return (
            <div className="col-lg-3 col-md-3 col-sm-6 my-2">
              <div className="card  mb-3" style={{maxWidth: '20rem'}}>
               
                <div className="card-body">
                  <p className="card-title bg-primary text-white rounded-right">Doctor of the month</p>
                  <div className="card-text text-center">
                    <img src={doctor_img} className="mx-auto rounded-circle" height="25px" Width="25px"/>
                    <div>Dr.Messy Willaiams</div>
                    <small className="text-secondary">Cardiology</small>
                  </div>
                </div>
                <div className="card-footer">
                <div className="row">
                <div className="mx-auto">
                <img src={operations_logo}  className="" height="30px" Width="30px"/>
                <div className=""> <div>150</div>
                    Operations
                    </div>
                </div>
                <div className="mx-auto"> 
                      <img src={no_of_patients_logo } height="30px" Width="30px"/>
                <div className="mx-auto"> <div>150</div>
                        Patients
                </div>
                </div>
                

                </div>
                </div>
              </div>
              <div className="card  mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-body">
                 
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
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
import React from 'react';
import DashboardHeader from './DashboardHeader'
import DashboardRightIndex from './DashboardRightIndex';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';


const Dashboard=()=>{

    return (
      <div>
      <Navbar issearch={true}/>
        <div className="row mx-0" >
              <Sidebar/>
        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
          <div className="row mx-3 my-4">
            <DashboardHeader/>
            <DashboardRightIndex/>
          </div>
      </div>
      </div>
</div>

    )
}

export default Dashboard;
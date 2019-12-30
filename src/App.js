import React,{useState} from 'react';
import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Link,Route,Switch,Redirect} from 'react-router-dom';
// import {} from 'react-router';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import AddDoctor from './Components/AddDoctor/AddDoctor'
import AddPatient from './Components/AddPatient/AddPatient';
import PatientsList from './Components/Patients/PatientsList';
import Addappointment from './Components/Addappointment'
import Doctors from './Components/Doctors/Doctors'
import Login from './Components/Users/Login'
import PatientDetails from './Components/Dashboard/SubComponents/PatientDetails'

const App=()=> {

  const [isdashboard,setIsdashboard]=useState(true);
  


  const checkurl=(url)=>{

  }

  return (
    
    <div className="App">

      
           <BrowserRouter>

                    <Switch>
                      <Redirect exact from='/' to='/dashboard' /> 
                      <Route exact path="/login" component={(props)=><Login {...props}/>}/>

                      <Route  path="/dashboard" component={(props)=> <Dashboard {...props}/> } />
                      
                      {/* <Route exact path="/dashboard/:name" component={(props)=><PatientsList {...props} />}/> */}


                      {/* <Route exact path="/dashboard/:name/:id" component={(props)=><PatientDetails {...props} />}/> */}

                
                      <Route exact path="/doctors" component={(props)=><Doctors {...props} />} />
                
                      <Route exact path="/patients" component={(props)=><PatientsList {...props}/>} />

                      <Route exact path="/addDoctor" component={(props)=><AddDoctor {...props}/>}/>

                      <Route exact path="/addPatient" component={(props)=><AddPatient {...props} /> }/>
                      
                      <Route exact path="/addAppointment" component={(props)=><Addappointment {...props} /> }/>
                      
                    </Switch>
                    
                    {/* <Dashboard/> */}
                

               </BrowserRouter>
     

    </div>
    
  );
}

export default App;

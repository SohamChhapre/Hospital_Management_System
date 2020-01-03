import React,{useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter,Link,Route,Switch,Redirect} from 'react-router-dom';
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

  const [authuser,setAuthuser]=useState("");
  


  const setAuth=(User)=>{
    console.log(User,"In app")
        setAuthuser(User);
        let user={token:User.token , id:String(User.id), name: User.name ,email:User.email,logo:User.logo}
        console.log(user)
        localStorage.setItem('authuser', JSON.stringify(user));
      
  }

  return (
    
    <div className="App">

      
           <BrowserRouter>

                    <Switch>
                      {!authuser && <Redirect exact from="/" to="login" /> }
                      
                      { authuser && <Redirect exact from="/login" to="/dashboard"/>}
                      <Redirect exact from='/' to='/dashboard' /> 

                      <Route exact path="/login"  component={(props)=><Login {...props} setAuth={setAuth} />}/>

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

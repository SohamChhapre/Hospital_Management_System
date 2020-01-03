import React,{useState} from 'react';
import login_img from '../../../src/assets/icons/bg.png'
import Axios from 'axios';
import {ApiUrl} from '../Shared/Config';
import {useAlert} from 'react-alert';

const Login=({setAuth})=>{
    const [user,setUser]=useState({username:"",password:""})
    const Alert=useAlert();
    const handlesubmit=(e)=>{
      e.preventDefault()
      console.log(user);
          Axios.post(`${ApiUrl}/auth/api-token-auth/`,user) 
          .then((result) => {
            console.log(result);
            setAuth(result.data.data)
            Alert.show('Login Successfully', {
            timeout: 3000,
            type: 'success',
          })
             
            })
        .catch((err) => {
            console.log(err);
      //     Alert.show('Some message', {
      //       timeout: 3000,
      //       type: 'error',
      // })    
        });

    }

    
    return (
        <div className="container-fluid"> 
    <div className="row " style={{height:"100vh"}}>
    
        <div className="col-sm-5 col-md-5 col-lg-5 my-auto">
        <div className="row pt-5">
        <div className="col-md-8 col-sm-10 offset-sm-1 offset-md-2">
          
          <div className="login">
           
            <form action className="pt-3 " onSubmit={(e)=>handlesubmit(e)}>
                <h4 className="font-weight-bold">Login</h4>
                <div className="form-group mt-5">
                <label for="email" >Enter Email Id</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text bg-light border-right-0"><i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    </div>
                
              <input type="email" name id="email" className="form-control bg-light border-left-0" onChange={(e)=>{
                      setUser({...user,username:e.target.value})
                      console.log(user);
              }} required placeholder="E-mail Address" />
                </div>
                </div>
                <div className="form-group">
                <label for="password" >Password</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text bg-light border-right-0"><i class="fa fa-lock" aria-hidden="true"></i></div>
                    </div>
              <input type="password" name  id="password" className="form-control bg-light border-left-0" onChange={(e)=>{
                      setUser({...user,password:e.target.value})
                      console.log(user);
               }} required placeholder="Enter password" />
                </div>
                </div>
             
              
              <button className="btn btn-primary px-5" type="submit">Login</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  
  
  
  <div className="col-sm-7 col-lg-7 col-md-7 bg">
  <img src={login_img}  height="100%" width="100%" />
    </div>
  
  
  </div>
</div>

    )
}

export default Login;
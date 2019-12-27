import React from 'react';
import medanta_logo from '../../src/assets/img/medanta-logo.png';


const Navbar=({issearch})=>{
    return (
        <div>
  <nav className="navbar navbar-expand-sm bg-white navbar-light my-2">
    <div className="col-lg-2 col-md-2 col-sm-12 ">
      <a className="navbar-brand" href="#"><img src={medanta_logo} height="45px"/></a>
    </div>
    { issearch && <div className="col-lg-10 col-md-10 col-sm-12 bg-white">
      <form className="form-inline">
        Search patients: <input className="form-control  ml-3 mr-3" type="text" placeholder="Patient Name" />
        Or <input className="form-control  ml-3 mr-3 " type="text" placeholder="Patient Id" />
        
      </form>
    </div> }
     </nav> 
  <hr className="mx-0 my-0" />
</div>


    )
}


export default Navbar;

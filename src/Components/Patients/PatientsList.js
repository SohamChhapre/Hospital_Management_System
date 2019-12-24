import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';

const PatientsList=()=>{
    return (
      <div>
      <Navbar issearch={false}/>
        <div className="row mx-0" >
              <Sidebar/>

        <div className="col-lg-10 col-md-10 col-sm-12 bg-light">
  <div className>
    <div className="row mx-3 my-4">
      <div className="col-lg-6 col-md-6">
        <h5>Patient List</h5>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="row">
          <div className="col-sm-8 col-lg-8 col-md-8">
            <input type="text" className="form-control" id="email" placeholder="Search Patient Name or ID" name="email" />
          </div>
          <div className="col-sm-4 col-lg-4 col-md-4">
            <button className="btn btn-primary px-4">Add Patient</button>
          </div>
        </div>
      </div>
    </div>
    <hr style={{marginLeft: '-15px', marginRight: '-15px'}} />
    <div className="row mx-3 my-4">
      <div className="col-lg-12 col-md-12">
        <h5>23 Patients</h5>
      </div>
    </div>
    <div className="row mx-3 my-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th scope="row">Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">Default</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">Primary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">Secondary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-success">
            <th scope="row">Success</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">Danger</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">Warning</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-info">
            <th scope="row">Info</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-light">
            <th scope="row">Light</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-dark">
            <th scope="row">Dark</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table> 
    </div>
  </div>
</div>
</div>
</div>
    )
}


export default PatientsList;
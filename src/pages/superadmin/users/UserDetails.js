import React, {useState} from 'react'
import Sidebar from '../../Layout/Sidebar'
import SweetAlert from 'sweetalert2-react';
import Select from "react-select";


const UserDetails = () => {
    const [selectedOptions, setSelectedOptions] = useState();
    const [show, setShow] = useState(false);

    const optionList = [
        { value: "red", label: "Select Options here" },
        { value: "green", label: "Green" },
    ];
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    return (
        <>
            <div id="main_content">
                <Sidebar />
                <div className="page">
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center ">
                                <div className="header-action">
                                    <h1 className="page-title">Users</h1>
                                    <ol className="breadcrumb page-breadcrumb">
                                        {/* <li className="breadcrumb-item"><a href="#">Vidyamate</a></li> */}
                                        <li className="breadcrumb-item"><a href="users">User List</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Users</li>
                                    </ol>
                                </div>
                                {/* <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Fees-all">User List</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Fees-add">User Registration</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>

                    <div className="section-body mt-4">
                        <div className="container-fluid">
                        <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Update Basic Information</h3>
                        </div>
                        <form className="card-body">
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Organization Name<span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <Select
                                options={optionList}
                                placeholder="Select Organization Name"
                                value={selectedOptions}
                                onChange={handleSelect}
                                isSearchable={true}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">First Name <span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <input type="text" className="form-control" placeholder="Enter First name" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Last Name <span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <input type="text" className="form-control" placeholder="Enter Last name" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Email</label>
                            <div className="col-md-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Designation <span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <select className="form-control input-height" name="Designation">
                                <option value="">Select...</option>
                                <option value="Category 1">Designation 1</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-3 col-md-3 col-form-label">IsAdmin<span className="text-danger">*</span></label>
                            <div className="col-md-2 ml-4">
                            <input type="checkbox" className="form-check-input" />
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-md-3 col-form-label">Profile Picture</label>
                            <div className="col-md-9">
                              
                              <input type="file" className="dropify" />
                              <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                            </div>
                          </div> */}
                        </form>
                      </div>
                    </div>

                  </div>
                  <div className="col-sm-12">
                    <button type="submit" className="mr-1 btn btn-primary">Update</button>
                    <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                  </div>
                    </div>

                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default UserDetails
import React from 'react'
import SchoolSidebar from '../../Layout/SchoolSidebar'

const StaffMaster = () => {
    return (
        <>
            <div id="main_content">
                <SchoolSidebar />
                <div className="page">
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="header-action">
                                <h1 className="page-title">Staff Master</h1>
                            </div>
                        </div>
                    </div>
                    <div className="section-body mt-4">
                        <div className="container-fluid">
                            <div className="row clearfix">
                                <div className="col-lg-10 col-md-12 col-sm-12">
                                    <div className="card">
                                        <form className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label ">First Name<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="text" className="form-control" placeholder='Enter First Name' />
                                                </div>
                                                <label className="col-md-2 col-form-label ">Last Name<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="text" className="form-control" placeholder='Enter Last Name' />
                                                </div>

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Employee No<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="number" className="form-control" placeholder='Enter Employee Number' />
                                                </div>
                                                <label className="col-md-2 col-form-label">Mobile No <span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="number" className="form-control" placeholder='Enter Mobile Number' />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">DOB<span className="text-danger"></span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <label className="col-md-2 col-form-label ">Email<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="email" className="form-control" placeholder='Enter Email' />
                                                </div>
                                            </div>
                                            <div className="form-group row">

                                                <label className="col-md-2 col-form-label">Address<span className="text-danger"></span></label>
                                                <div className="col-md-9">
                                                    <input type="address" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Addhar No<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="number" className="form-control" placeholder='Enter Addhar Number' />
                                                </div>
                                                <label className="col-md-2 col-form-label">PAN No<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="number" className="form-control" placeholder='Enter PAN number' />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Qalification<span className="text-danger">*</span></label>
                                                <div className="col-md-3 mr-auto">
                                                    <input type="text" className="form-control" placeholder='Enter Qualification' />
                                                </div>
                                                <label className="col-md-2 col-form-label">Blood Group</label>
                                                <div className="col-md-3 mr-auto">
                                                    <select className="form-control">
                                                        <option value="">Select Blood Group</option>
                                                        <option value="A+">A+</option>
                                                        <option value="A-">A-</option>
                                                        <option value="B+">B+</option>
                                                        <option value="B-">B-</option>
                                                        <option value="AB+">AB+</option>
                                                        <option value="AB-">AB-</option>
                                                        <option value="O+">O+</option>
                                                        <option value="O-">O-</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Profile Picture</label>
                                                <div className="col-md-10">
                                                    {/* <Dropzone /> */}
                                                    <input type="file" className="dropify" />
                                                    <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffMaster
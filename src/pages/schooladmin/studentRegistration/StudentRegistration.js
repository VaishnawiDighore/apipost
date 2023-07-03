import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import SchoolSidebar from '../../Layout/SchoolSidebar'

const StudentRegistration = () => {
    return (
        <>
            <div id="main_content">
                {/* <Sidebar /> */}
                <SchoolSidebar />
                <div className="page">

                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center ">
                                <div className="header-action">
                                    <h1 className="page-title">School</h1>
                                    <ol className="breadcrumb page-breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Vidyamate</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Student Registration</li>
                                    </ol>
                                </div>
                                <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Student-all">Personal Detail</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-parent">Parents Detail</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-upload">Upload Documents</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-add">Student Registration</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section-body mt-4">
                        <div className="container-fluid">
                            <div className="tab-content">
                                <div className="tab-pane active" id="Student-all">
                                    <div className="row clearfix">
                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Personal Detail</h3>
                                                </div>
                                                <form className="card-body">

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Full Name <span className="text-danger">*</span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control" placeholder="Enter Full Name" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Date of Birth</label>
                                                                <div className="col-md-8">
                                                                    <input type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Gender <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">Male </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Nationality</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">India </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Religion <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Category</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Caste <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Adhar Card No.</label>
                                                                <div className="col-md-8">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">sub Caste <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Application No.</label>
                                                                <div className="col-md-8">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Mother Tongue <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Address <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" placeholder="Enter Last name" />
                                            </div>
                                        </div> */}
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

                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Contact Detail</h3>
                                                </div>
                                                <div className="card-body">
                                                    {/* <div className="row clearfix"> */}
                                                    {/* <div className="col-sm-12"> */}
                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Address <span className="text-danger">*</span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control" placeholder="Enter Last name" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">State</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">District <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">City</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Contact No. <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Email I'd<span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <input type="email" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>Contact Number</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>Contact Email</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div> */}





                                            </div>
                                        </div>

                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Other Detail</h3>
                                                </div>
                                                <div className="card-body">

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Birth Place</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Country <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">State</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">District<span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Blood Group<span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Other <span className="text-danger">*</span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control" placeholder="Enter Last name" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-12 justify-content-center align-item-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Save</button>
                                    </div> */}
                                </div>

                                <div className="tab-pane" id="Student-parent">
                                    <div className="row clearfix">
                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Parent Detail</h3>
                                                </div>
                                                <form className="card-body">

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Father Name <span className="text-danger">*</span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control" placeholder="Enter First name" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Res. Address</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Office Address <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Education</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Contact No. <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Email I'd</label>
                                                                <div className="col-md-8">
                                                                    <input type="email" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Occupation <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Annual Income <span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Adhar No.</label>
                                                                <div className="col-md-9">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">PAN No.</label>
                                                                <div className="col-md-8">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Profile Picture</label>
                                                        <div className="col-md-10">
                                                            {/* <Dropzone /> */}
                                                            <input type="file" className="dropify" />
                                                            {/* <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Mother Detail</h3>
                                                </div>
                                                <form className="card-body">

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Father Name <span className="text-danger">*</span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control" placeholder="Enter First name" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Res. Address</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Office Address <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Education</label>
                                                                <div className="col-md-8">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Contact No. <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Email I'd</label>
                                                                <div className="col-md-8">
                                                                    <input type="email" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Occupation <span className="text-danger">*</span></label>
                                                                <div className="col-md-9">
                                                                    <select className="form-control input-height" name="State">
                                                                        <option value="">Select...</option>
                                                                        <option value="Category 1">option </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">Annual Income <span className="text-danger">*</span></label>
                                                                <div className="col-md-8">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-3 col-form-label">Adhar No.</label>
                                                                <div className="col-md-9">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group row">
                                                                <label className="col-md-4 col-form-label">PAN No.</label>
                                                                <div className="col-md-8">
                                                                    <input type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Profile Picture</label>
                                                        <div className="col-md-10">
                                                            {/* <Dropzone /> */}
                                                            <input type="file" className="dropify" />
                                                            {/* <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-12 justify-content-center align-item-center">
                                            <button type="submit" className="btn btn-primary btn-lg">Save</button>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="tab-pane" id="Student-upload">
                                    <div className="row clearfix">
                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                {/* <div className="card-header">
                                                    <h3 className="card-title">Parent Detail</h3>
                                                </div> */}
                                                <form className="card-body">
                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Document<span className="text-danger">*</span></label>
                                                        <div className="col-md-6">
                                                            <select className="form-control input-height" name="State">
                                                                <option value="">Select...</option>
                                                                <option value="Category 1">option </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-md-2 col-form-label">Remark</label>
                                                        <div className="col-md-6">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-lg-10 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Document List</h3>
                                                </div>
                                                <form className="card-body">
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="Student-add">
                                    <div className="row clearfix">
                                    <div className="table-responsive card">
                            <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                <thead>
                                    <tr>
                                        <th >Sr.No.</th>
										<th>School Name</th>
										<th>Roll No</th>
										<th>Class</th>
										<th>Medium</th>
										<th>Marks Obtained</th>
										<th>Total Marks</th>
                                        <th>Passing Year</th>
                                        <th>Exam Name</th>
                                        <th>Board/University</th>
                                        <th>State Name</th>
                                        <th>No. of Attempts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
										<td><span className="font-16">Corrine M Johnson</span></td>
										<td>(417) 646-7483</td>
										<td>A</td>
										<td>English</td>
										<td>450</td>
										<td>700</td>
                                        <td>2022</td>
                                        <td>SSC</td>
                                        <td>State Board</td>
                                        <td>Maha.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
										<td><span className="font-16">Alice A Smith</span></td>
										<td>(417) 646-7483</td>
										<td>A</td>
										<td>English</td>
										<td>450</td>
										<td>700</td>
										<td>2022</td>
                                        <td>SSC</td>
                                        <td>State Board</td>
                                        <td>Maha.</td>
                                        <td>1</td>
                                    </tr>    
                                </tbody>
                            </table>
                        </div>

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

export default StudentRegistration
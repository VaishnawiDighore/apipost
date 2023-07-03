import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import { Link } from 'react-router-dom'

const AddSession = () => {
  return (
    <>
      <div id="main_content">
        <Sidebar />
        <div className="page">
          <div className="section-body">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="header-action">
                  <h1 className="page-title">Session Management</h1>
                  {/* <ol className="breadcrumb page-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Session Management</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Session</li>
                  </ol> */}
                </div>
                <ul className="nav nav-tabs page-header-tab">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Student-all">Session List</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-add">Add session</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-body mt-4">
            <div className="container-fluid">
              <div className="tab-content">
                <div className="tab-pane active" id="Student-all">
                  <div className="table-responsive card">
                    <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                      <thead>
                        <tr>
                          <th>Sr.No.</th>
                          <th>Session Name</th>
                          <th>Start date</th>
                          <th>End date</th>
                          <th>Visible</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Ken Smith</td>
                          <td>2-2-20</td>
                          <td>2-2-23</td>
                          <td><input type="checkbox" id="checkbox1" /></td>
                          <td>
                            <Link className="text-muted" to="/session-details"><i className="fa fa-edit"></i></Link>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Gerald K Smith</td>
                          <td>2-2-20</td>
                          <td>2-2-23</td>
                          <td><input type="checkbox" id="checkbox1" /></td>
                          <td>
                            <Link className="text-muted" to="/session-details"><i className="fa fa-edit"></i></Link>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Ken Smith</td>
                          <td>2-2-20</td>
                          <td>2-2-23</td>
                          <td><input type="checkbox" id="checkbox1" /></td>
                          <td>
                            <Link className="text-muted" to="/session-details"><i className="fa fa-edit"></i></Link>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane" id="Student-add">
                  <div className="row clearfix">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                      <div className="card">
                        <form className="card-body">
                          {/* <div className="row clearfix"> */}

                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Session Name <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                            <input type="text" className="form-control" />
                            </div>
                          </div>
                          {/* </div> */}

                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Start Date <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                              <input type="date" className="form-control" />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">End Date <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                              <input type="date" className="form-control" />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Current Session <span className="text-danger">*</span></label>
                            <div className="col-md-7 ml-4">
                              <input type="checkbox" className="form-check-input" />
                            </div>
                            </div>
                            
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label"></label>
                    <div className="col-md-7">
                      <button type="submit" className="btn btn-primary">Save</button>
                      <button type="submit" className="btn btn-outline-secondary ml-3">Cancel</button>
                    </div>
                  </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
            </div >
          </div >

        </div >
      </div >
    </>
  )
}

export default AddSession
import React from 'react'
import SchoolSidebar from '../../Layout/SchoolSidebar'

const Admission = () => {
    return (
        <>
            <div id="main_content">
                {/* <Sidebar /> */}
                <SchoolSidebar />
                <div className="page">
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="header-action">
                                <h1 className="page-title">Admission</h1>
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
                                                <label className="col-md-2 col-form-label">Admission Date <span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="col-md-5 ml-3 btn btn-primary">
                                                {/* <button type="submit" className="btn btn-primary ">Admission No N.A</button> */}
                                                Admission No N.A
                                               </div>
                                                {/* <label className="col-md-2 col-form-label">Name <span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control" />
                                                </div> */}
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Student<span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="search" className="form-control" />
                                                </div>
                                                <label className="col-md-2 col-form-label">Student Name <span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Class-Section<span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <label className="col-md-2 col-form-label">Medium <span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Concession <span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <label className="col-md-2 col-form-label">Admission Count <span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-2 col-form-label">Admission Month<span className="text-danger">*</span></label>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control" />
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="table-responsive card">
                                    <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th >Sr.No.</th>
                                                <th>Fee Heads(s)</th>
                                                <th>Total Install</th>
                                                <th>Amount</th>
                                                <th>Discount</th>
                                                <th>Annual Fee Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" /></td>
                                                <td>1</td>
                                                <td>Admission Fees</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>

                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" id="checkbox1" /></td>
                                                <td>2</td>
                                                <td>Admission Fees</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admission
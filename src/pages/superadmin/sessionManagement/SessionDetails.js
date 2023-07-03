import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import SweetAlert from 'sweetalert2-react';

const SessionDetails = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div id="main_content">
                <Sidebar />
                <div className="page">
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center ">
                                <div className="header-action">
                                    <h1 className="page-title">Session View</h1>
                                    <ol className="breadcrumb page-breadcrumb">
                                        {/* <li className="breadcrumb-item"><a href="#">Vidyamate</a></li> */}
                                        <li className="breadcrumb-item"><a href="session-management">Session List</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Session View</li>
                                    </ol>
                                </div>
                                <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Fees-all">Session List</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Fees-add">Add session</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section-body mt-4">
                        <div className="container-fluid">
                            <div className="row row-deck"> 
                                <div className="col-xl-6 col-lg-4 col-md-6">
                                <div className="card">
                                    <a href="#"><img className="card-img-top" style={{height:"300px"}} src="../assets/images/gallery/1.jpg" alt=""/></a>
                                    <div className="card-body d-flex flex-column">
                                        <h5><a href="courses-details.html">IIT College</a></h5>
                                        <div className="text-muted">Session 1</div>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-striped table-vcenter mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="w20"><i className="fa fa-calendar text-blue"></i></td>
                                                    <td className="tx-medium">Start date</td>
                                                    <td className="text-right">6 july 2020</td>
                                                </tr>
                                                <tr>
                                                    <td className="w20"><i className="fa fa-calendar text-blue"></i></td>
                                                    <td className="tx-medium">End date</td>
                                                    <td className="text-right">6 july 2022</td>
                                                </tr>
                                                {/* <tr>
                                                    <td><i className="fa fa-cc-visa text-danger"></i></td>
                                                    <td className="tx-medium">Fees</td>
                                                    <td className="text-right">$1,674</td>
                                                </tr> */}
                                                <tr>
                                                    <td><i className="fa fa-users text-warning"></i></td>
                                                    <td className="tx-medium">Current Session</td>
                                                    <td className="text-right">125+</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="card-footer">
                                        <div className="d-flex align-items-center mt-auto">
                                            <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar"/>
                                            <div>
                                                <a href="#">Pro. Jane</a>
                                                <small className="d-block text-muted">Head OF Dept.</small>
                                            </div>
                                            <div className="ml-auto text-muted">
                                                <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i> 521</a>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                                <a href="#" className="card-options-remove" data-toggle="card-remove"  onClick={() => setShow(true)} > <i class="fa fa-trash-o text-danger">
                                                                </i></a>
                                </div>
                                <SweetAlert
                    show={show}
                    title="Are you sure?"
                    text="You will not be able to recover this imaginary file!"
                    type="warning"
                    showCancelButton={true}
                    confirmButtonColor="#dc3545"
                    confirmButtonText="Yes, delete it!"
                    closeOnConfirm={false}
                    onConfirm={() => setShow(false)}
                  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SessionDetails
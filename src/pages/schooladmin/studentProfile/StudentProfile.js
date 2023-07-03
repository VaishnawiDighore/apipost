import React from 'react'
import Profile from '../../../Logo/Profile.png'
import SchoolSidebar from '../../Layout/SchoolSidebar';

const StudentProfile = () => {
    const tableStyle = {
        backgroundColor: '#ccf2ff',
        padding: '10px',
        margin: ''
    };
    const pStyle = {
        padding:'8px',

    }

    return (
        <>
            <div id="main_content">
                {/* <Sidebar /> */}
                <SchoolSidebar />
                <div className="page">

                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center ">
                                <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Personal-detail">Personal Detail</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Parents-detail">Parents Detail</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Documents-details">Documents Details</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section-body mt-4">
                        <div className="container-fluid">
                            <div className="tab-content">
                                <div className="tab-pane active" id="Personal-detail">
                                    <div className="row clearfix">
                                        <div className="col-lg-5 col-md-12 col-sm-12">
                                            <div className="card">
                                                <form className="card-body pb-4">
                                                    <div className="row">
                                                        <div className="col-md-5 col-sm-12">
                                                            <div className="form-group row ">
                                                                <img className="rounded-circle" style={{ width: '85%', }} src={Profile} alt="Logo" />
                                                                <p style={{ paddingLeft: '60px', paddingTop: '20px' }}>Student Profile</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7 col-sm-12">
                                                            <div className='table-responsive card p-3'>
                                                                <table className="mb-1 p-1 text-nowrap">
                                                                    <tr>
                                                                        <th>Student Name :</th>
                                                                        <td>Corrine M Johnson</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Class : </th>
                                                                        <td>VIII - A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Session :</th>
                                                                        <td>2023 - 2024</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Concession :</th>
                                                                        <td>Full Paid</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Admitted :</th>
                                                                        <td style={{ color: 'green' }}><b>New</b></td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header p-2">
                                                    <h3 className="card-title">Payment Details</h3>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="table-responsive card">
                                                        <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th>Regular Fee</th>
                                                                    <th></th>
                                                                    <th>Click to View History</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Total Fee : 25,330.00</td>
                                                                    <td>Paid Fee : 0.00</td>
                                                                    <td>Balanace Fee: 25,330.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Regular Fee</td>
                                                                    <td></td>
                                                                    <td>Click to View History</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Paid Fee : 0.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Personal Detail</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className='row ml-2'>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff',justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px' }}>
                                                            <p style={pStyle}>Admission Date</p>
                                                            <p style={pStyle}>Date of Birth</p>
                                                            <p style={pStyle}>Nationality</p>
                                                            <p style={pStyle}>Category</p>
                                                            <p style={pStyle}>Adhar Card No.</p>
                                                            <p style={pStyle}>Application No.</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                            <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                            <p>1234 1234 1234 1234<hr/></p>
                                                            <p>31/07/1999<hr/></p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff', justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px'  }}>
                                                        <p style={pStyle}>Registration Date</p>
                                                            <p style={pStyle}>Gender</p>
                                                            <p style={pStyle}>Religion</p>
                                                            <p style={pStyle}>Caste</p>
                                                            <p style={pStyle}>Sub Caste</p>
                                                            <p style={pStyle}>Mother Tongue</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                        <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                            <p>1234 1234 1234 1234<hr/></p>
                                                            <p>31/07/1999<hr/></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Contact Detail</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className='row ml-2'>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff',justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px' }}>
                                                            <p style={pStyle}>Address</p>
                                                            <p style={pStyle}>State</p>
                                                            <p style={pStyle}>City</p>
                                                            <p style={pStyle}>Email I'd</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                            <p></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                            
                                                        </div>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff', justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px'  }}>
                                                        <p style={pStyle}>Registration Date</p>
                                                            <p style={pStyle}>Gender</p>
                                                     
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                        <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Other Detail</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className='row ml-2'>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff',justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px' }}>
                                                            <p style={pStyle}>Birth Place</p>
                                                            <p style={pStyle}>State</p>
                                                            <p style={pStyle}>Blood Group</p>
                                                            <p style={pStyle}>Other</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                            <p></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                            
                                                        </div>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff', justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px'  }}>
                                                        <p style={pStyle}>Country</p>
                                                            <p style={pStyle}>District</p>
                                                     
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                        <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="Parents-detail">
                                    <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Parents Details</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className='row ml-2'>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff',justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px' }}>
                                                            <p style={pStyle}>Father Name</p>
                                                            <p style={pStyle}>Res.Address</p>
                                                            <p style={pStyle}>Education</p>
                                                            <p style={pStyle}>Email I'd</p>
                                                            <p style={pStyle}>Annual Income</p>
                                                            <p style={pStyle}>PAN No.</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                            <p></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff', justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px'  }}>
                                                        <p style={pStyle}>Office Address</p>
                                                            <p style={pStyle}>Contact No.</p>
                                                            <p style={pStyle}>Occupation</p>
                                                            <p style={pStyle}>Adhar No.</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                        <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Mother Details</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className='row ml-2'>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff',justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px' }}>
                                                            <p style={pStyle}>Mother Name</p>
                                                            <p style={pStyle}>Res.Address</p>
                                                            <p style={pStyle}>Education</p>
                                                            <p style={pStyle}>Email I'd</p>
                                                            <p style={pStyle}>Annual Income</p>
                                                            <p style={pStyle}>PAN No.</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                            <p></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-12 col-sm-12" style={{background:' #ccf2ff', justifyContent:'center', boxShadow:'0 0 2px',borderRadius:'5px'  }}>
                                                        <p style={pStyle}>Office Address</p>
                                                            <p style={pStyle}>Contact No.</p>
                                                            <p style={pStyle}>Occupation</p>
                                                            <p style={pStyle}>Adhar No.</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-12 col-sm-12 pl-4">
                                                        <p>06/06/2020<hr/></p>
                                                            <p>06/06/2020<hr/></p>
                                                            <p>Indian<hr/></p>
                                                            <p>S.C.<hr/></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="Documents-details">
                                    <div className="row clearfix">
                                        <div className="col-lg-11 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Document Detail</h3>
                                                </div>
                                                <form className="card-body">
                                                    <div className="form-group row">
                                                        <div className="col-lg-1 col-md-2 col-sm-12  pr-1">
                                                            <div className="form-group">
                                                                <label>Sr.No.</label>
                                                                <input type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-2 col-sm-12">
                                                            <label>Document Number</label>
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-3 col-md-2 col-sm-12">
                                                            <div className="form-group">
                                                                <label>Document Date</label>
                                                                <input type="date" data-provide="datepicker" data-date-autoclose="true" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-2 col-sm-12">
                                                            <div className="form-group">
                                                                <label>ClassName name</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
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
                </div>
            </div>
        </>
    )
}

export default StudentProfile
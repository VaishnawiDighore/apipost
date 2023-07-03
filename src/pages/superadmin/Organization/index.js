import React, { useState } from "react";
import Sidebar from "../../Layout/Sidebar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SweetAlert from "sweetalert2-react";
import {
  clearError,
  createOrganization,
  getAllOrganization,
} from "../../../actions/OrganizationAction";
import { useAlert } from "react-alert";
import { OrgAPI } from "../../../api/organizationAPI";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";
const Organization = () => {
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { organization, error, loading } = useSelector(
    (state) => state.organization
  );
 
  console.log(error, "error from redux");

  useEffect(() => {
    if (token){
        console.log(token)
        console.log(organization, "org data from redux");
    dispatch(getAllOrganization(token));
    }
  }, [dispatch, token]);
  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearError());
  //   }
  // }, [error, dispatch]);






  const [editId, setEditId] = useState();
  const [input, SetInput] = useState({
    name: "",
    reg_no: "",
    since_date: "",
  });

  const [orgdata, setOrgdata] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createOrganization(input))
    if (edit) {
      const editData = {
        ...input,
        organization_id: editId,
      };
      OrgAPI.updateOrg(editData)
        .then((res) => {
          if (res.data.status === 200) {
            Swal.fire({
              text: res.data.msg,
              icon: "success",
              imageAlt: "success image",
            }).then((result) => {
              if (result.isConfirmed) {
                SetInput({});
                setEdit(false);
                window.location.href = "/organization";
                // navigate("/organization");
              }
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      OrgAPI.createOrg(input)
        .then((res) => {
          if (res.data.status === 200) {
            Swal.fire({
              text: res.data.msg,
              icon: "success",
              imageAlt: "success image",
            }).then((result) => {
              if (result.isConfirmed) {
                SetInput({});
                window.location.href = "/organization";
                navigate("/organization");
              }
            });
          }
          if(res.data.status===403){
            alert.error(res.data.msg);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    if (orgdata?.length === 0) {
      setLoader(<Loader />);
    }
    OrgAPI.getAllOrg()
      .then((res) => {
        setOrgdata(res.data.payload);
        setLoader("");
      })
      .catch((err) => console.log(err));
  }, []);
 

  const onDelete = (id) => {
    console.log(id);
    const did = {
      organization_id: id,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#f46a6a",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        OrgAPI.deleteOrg(did).then((res) => {
          Swal.fire("Deleted!", res.data.msg, "success");
          window.location.href = "/organization";
        });
      }
    });
  };

  const onEdit = (data) => {
    setEdit(!edit);
    console.log(data);
    setEditId(data.id);
    SetInput({
      name: data.name,
      reg_no: data.reg_no,
      since_date: data.since_date,
    });
  };
  return (
    <div id="main_content">
      <Sidebar />
      <div className="page">
        <div className="section-body">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="header-action">
                <h1 className="page-title">SANJUBA HIGH SCHOOL</h1>
                {/* <ol className="breadcrumb page-breadcrumb">
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Users</li>
                </ol> */}
              </div>
              <ul className="nav nav-tabs page-header-tab">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#">
                    Organisation List
                  </a>
                </li>
                {/* <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#">Add User</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="section-body mt-4">
          <div className="container-fluid">
            {/* <div className="col-lg-12 col-md-12 col-sm-12"></div> */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  {" "}
                  {edit ? "Edit Information" : "Add Information"}{" "}
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col-md-3 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Organization Name"
                          value={input.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <div className="form-group">
                        <label>Registration Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Registration Number"
                          name="reg_no"
                          value={input.reg_no || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <div className="form-group">
                        <label>Since</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="since"
                          name="since_date"
                          value={input.since_date || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                      <div className="form-group">
                        <label className="visually-hidden">.</label>
                        <button
                          type="submit"
                          className="btn btn-primary form-control"
                        >
                          {edit ? "EDIT" : "+ ADD"}
                        </button>
                      </div>
                      {/* <button
                        type="submit"
                        className="btn btn-outline-secondary"
                      >
                        Cancel
                      </button> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="tab-content mt-4">
              <div className="tab-pane active" id="Fees-all">
                {loader ? (
                  <div>{loader}</div>
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
                          <thead>
                            <tr>
                              <th>Sr.No.</th>
                              <th>Name</th>
                              <th>Reg No</th>
                              <th>Since</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orgdata?.map((org, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{org.name}</td>
                                <td>{org.reg_no}</td>
                                <td>{org.since_date}</td>
                                <td className="d-flex gap-2">
                                  <NavLink
                                    to="#"
                                    className="card-options-remove mr-3"
                                    data-toggle="card-remove"
                                    onClick={() => onDelete(org.id)}
                                  >
                                    <i class="fa fa-trash-o text-danger"></i>
                                  </NavLink>
                                  <NavLink
                                    className="text-muted"
                                    to="#"
                                    onClick={() => {
                                      onEdit(org);
                                    }}
                                  >
                                    <i className="fa fa-edit"></i>
                                  </NavLink>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;

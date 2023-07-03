import React, { useState, useEffect } from 'react';
import Sidebar from '../../Layout/Sidebar';
import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import SweetAlert from "sweetalert2-react";
import {
  clearError,
  createUsers,
  users,
} from "../../../actions/users/UsersAction";
import { useAlert } from "react-alert";
import axios from "axios";
import { UsersAPI } from '../../../api/UsersAPI';
const Users = () => {
  const token = localStorage.getItem('token');
  const [selectedOptions, setSelectedOptions] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const {users, error} = useSelector(
    (state) => state.organization
  );
  console.log(users,"data ");
  console.log(error,"error");
  const [input, SetInput] = useState({});
  const [userdata, setUserdata] = useState([]);
  console.log(userdata, "user");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    UsersAPI.createUsers(input)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          SetInput({});
          window.location.href = "/users";
          navigate("/users");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    UsersAPI.getAllUsers()
      .then((res) => {
        setUserdata(res.data.payload);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);
  const onDelete = (id) => {
    console.log(id);
    const did = {
      user_id: id,
    };
    UsersAPI.deleteUsers(did).then((res) => {
      if ((res.data.status = 200)) {
        window.location.href = "/users";
      }
    });
  };
  const optionList = [
    { value: "red", label: "Select Options here" },
    { value: "green", label: "Green" },
  ];
  return (
    <>
      <div id="main_content">
        <Sidebar />
        <div className="page">
          <div className="section-body">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="header-action">
                  <h1 className="page-title">User</h1>
                </div>
                <ul className="nav nav-tabs page-header-tab">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Fees-all">User List</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Fees-add">Add User</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section-body mt-4">
            <div className="container-fluid">
              <div className="tab-content">
                <div className="tab-pane active" id="Fees-all">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
                          <thead>
                            <tr>
                              <th>Sr.No.</th>
                              <th>School</th>
                              <th>User Name</th>
                              <th>Designation</th>
                              <th>Admin</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              userdata?.map((user, index) => {
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{user.fk_school_id}</td>
                                  <td>{user.first_name}{user.last_name}</td>
                                  <td>{user.fk_designation_id}</td>
                                  <td>{user.is_admin}</td>
                                  <td>
                                  <Link className="text-muted" to="/user-details"><i className="fa fa-edit"></i></Link>
                                  </td>
                                </tr>
                              })
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Fees-add">
                  <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Basic Information</h3>
                        </div>
                        <form className="card-body" onSubmit={handleSubmit}>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">School Name<span className="text-danger">*</span></label>
                            <div className="col-md-9">
                            <input
                              // id="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter First name"
                                name="fk_school_id"
                                value={input.fk_school_id}
                                // onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
                                onChange={handleChange}
                                required
                              />
                              {/* <Select
                                options={optionList}
                                name="fk_school_id"
                                placeholder="Select Organization Name"
                                value={input.fk_school_id}
                                onChange={handleChange}
                                isSearchable={true}
                              /> */}
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">First Name <span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <input
                              // id="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter First name"
                                name="first_name"
                                value={input.firstName}
                                // onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Last Name <span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Last name"
                                name="last_name"
                                value={input.lastName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Email</label>
                            <div className="col-md-9">
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={input.email || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Designation <span className="text-danger">*</span></label>
                            <div className="col-md-9">
                              <select
                                className="form-control input-height"
                                name="fk_designation_id"
                                value={input.designation}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select...</option>
                                <option value="Category 1">Designation 1</option>
                                <option value="Category 2">Designation 2</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">Admin</label>
                            <div className="col-md-9">
                              <input
                                type="checkbox"
                                className="filled-in"
                                name="is_admin"
                                checked={input.isAdmin}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-md-9 offset-md-3">
                              <button type="submit" className="btn btn-primary">Save</button>
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
  );
};
export default Users;
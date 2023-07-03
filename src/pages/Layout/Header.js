import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../Auth/Logout";

const Header = () => {
  return (
    <>
      <div className="section-body" id="page_top">
        <div className="container-fluid">
          {/* <div className="page-header d-flex justify-content-end align-item-right"> */}
          <div className="page-header">
            <div className="left">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What you want to find"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="right d-flex justify-content-end align-item-right">
              <div className="notification d-flex">
                <div className="dropdown d-flex">
                  <a
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-bell"></i>
                    <span className="badge badge-primary nav-unread"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul className="list-unstyled feeds_widget">
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-blue">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">
                            Campaign{" "}
                            <strong className="text-blue font-weight-bold">
                              Holiday
                            </strong>{" "}
                            is nearly reach budget limit.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-green">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">
                            New admission{" "}
                            <strong className="text-green font-weight-bold">
                              32
                            </strong>{" "}
                            in computer department.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-red">
                            <i className="fa fa-info"></i>
                          </span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">
                            6th sem result{" "}
                            <strong className="text-red font-weight-bold">
                              67%
                            </strong>{" "}
                            in computer department.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-azure">
                            <i className="fa fa-thumbs-o-up"></i>
                          </span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">
                            New Feedback{" "}
                            <strong className="text-azure font-weight-bold">
                              53
                            </strong>{" "}
                            for university assessment.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item text-center text-muted-dark readall"
                    >
                      Mark all as read
                    </a>
                  </div>
                </div>
                <div className="dropdown d-flex">
                  <a
                    href="javascript:void(0)"
                    className="chip ml-3"
                    data-toggle="dropdown"
                  >
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(../assets/images/xs/avatar5.jpg)",
                      }}
                    ></span>
                    Super Admin
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a className="dropdown-item" href="page-profile.html">
                      <i className="dropdown-icon fe fe-user"></i> Profile
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="javascript:void(0)">
                      <i className="dropdown-icon fe fe-help-circle"></i> Need
                      help?
                    </a>
                    <NavLink
                      className="dropdown-item"
                     
                      to="/logout"
                    >
                      <i className="dropdown-icon fe fe-log-out"></i> Sign out
                    </NavLink>
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

export default Header;

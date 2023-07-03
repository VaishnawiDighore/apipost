import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo.png";

const Sidebar = ({showData}) => {

  return (
    <>
      {/* // <div id="main_content"> */}

      <div id="header_top" className="header_top">
        <div className="container">
          <div className="hleft">
            <Link className="header-brand">
              <img className="rounded-circle" src={Logo} alt="Logo" />
            </Link>
            <div className="dropdown">
              <a
                href="javascript:void(0)"
                className="nav-link icon menu_toggle"
              >
                <i className="fe fe-align-center"></i>
              </a>
            </div>
          </div>
          <div className="hright">
            <a href="login" className="nav-link icon settingbar">
              <i className="fe fe-power"></i>
            </a>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">Vidyamate</h5>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#menu-super">
              Super Admin
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="nav-link" data-toggle="tab" href="#menu-school">
              School Admin
            </a>
          </li>
        </ul>
        <div className="tab-content mt-3">
          <div
            className="tab-pane fade show active"
            id="menu-super"
            role="tabpanel"
          >
            <nav className="sidebar-nav">
              <ul className="metismenu">
              <li>
                  <a href="#">
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                <li>
                <a href="master">
                  <i className="fa fa-users"></i>
                  <span>Masters</span>
                </a>
              </li>
                  <a href="organization">
                    <i className="fa fa-users"></i>
                    <span>Organization</span>
                  </a>
                </li>
                <li>
                  <a href="session-management">
                    <i className="fa fa-calendar-check-o"></i>
                    <span>Academic Session</span>
                  </a>
                </li>
                <li>
                  <a href="school-registration">
                    <i className="fa fa-graduation-cap"></i>
                    <span> School Registration</span>
                  </a>
                  </li>
                <li>
                  <a href="users">
                    <i className="fa fa-users"></i>
                    <span>Users</span>
                  </a>
                </li> 
              </ul>
            </nav>
          </div>

          <div className="tab-pane fade" id="menu-school" role="tabpanel">
            <nav className="sidebar-nav">
              <ul className="metismenu">
                <li>
                  <a href="student-registration">
                    <i className="fa fa-users"></i>
                    <span>Student Registration</span>
                  </a>
                </li>
                <li>
                  <a href="student-profile">
                    <i className="fa fa-user"></i>
                    <span>Student Profile</span>
                  </a>
                </li>
                <li>
                  <a href="student-admission">
                    <i className="fa fa-credit-card"></i>
                    <span>Admission</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-credit-card"></i>
                    <span>Fees</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-users"></i>
                    <span>Teacher</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-calendar-check-o"></i>
                    <span>Attendance</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-dashboard"></i>
                    <span>Examination</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-calendar"></i>
                    <span>Time Table</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-list-ul"></i>
                    <span>LMS</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-comments-o"></i>
                    <span>Message</span>
                  </a>
                </li>
                <li>
                  <a href="student-registration">
                    <i className="fa fa-bed"></i>
                    <span>Hostel</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="page">
        <Header />
        {/* <AddSession /> */}
      </div>

      {/* // </div> */}
    </>
  );
};

export default Sidebar;

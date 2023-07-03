
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo.png";
import SchoolHeader from "./SchoolHeader";

const SchoolSidebar = () => {
  return (
    <>
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
        <h5 className="brand-name">
          Vidyamate
        </h5>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#menu-school"
            >
              School Admin
            </a>
          </li>
        </ul>

        <div
          className="tab-pane fade show active"
          id="menu-school"
          role="tabpanel"
        >
          <nav className="sidebar-nav">
            <ul className="metismenu grid d-flex flex-column">
            <li>
                <a href="master" className="w-75">
                  <i className="fa fa-users"></i>
                  <span className="w-100">Administration</span>
                </a>
              </li>
            {/* <li>
                <a href="master">
                  <i className="fa fa-users"></i>
                  <span>Master</span>
                </a>
              </li> */}
              <li>
                <a href="student-registration" className="w-75">
                  <i className="fa fa-users"></i>
                  <span className="w-100">Admission</span>
                </a>
              </li>
              {/* <li>
                <a href="student-registration">
                  <i className="fa fa-users"></i>
                  <span>Student Registration</span>
                </a>
              </li> */}
              {/* <li>
                <a href="student-profile">
                  <i className="fa fa-user"></i>
                  <span>Student Profile</span>
                </a>
              </li> */}
              {/* <li>
                <a href="student-admission">
                  <i className="fa fa-credit-card"></i>
                  <span>Admission</span>
                </a>
              </li> */}
              {/* <li>
                <a href="staff-master">
                  <i className="fa fa-credit-card"></i>
                  <span>Staff Master</span>
                </a>
              </li> */}
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-credit-card" ></i>
                  <span className="w-100">Fees</span>
                </a>
              </li>
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-users"></i>
                  <span className="w-100">Attendance</span>
                </a>
              </li>
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-calendar-check-o"></i>
                  <span className="w-100">TimeTable</span>
                </a>
              </li>
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-dashboard"></i>
                  <span className="w-100">Examination</span>
                </a>
              </li>
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-list-ul"></i>
                  <span className="w-100">LMS</span>
                </a>
              </li>
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-comments-o"></i>
                  <span className="w-100">Communication</span>
                </a>
              </li>
              <li>
                <a href="#" className="w-75">
                  <i className="fa fa-bed"></i>
                  <span className="w-100">Hostel</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* </div> */}

      <div className="page">
        <SchoolHeader />
        {/* <AddSession /> */}
      </div>

      {/* // </div> */}
    </>
  );
};

export default SchoolSidebar;

import React from 'react'
import Header from '../Layout/Header'
import { Link } from 'react-router-dom'
import Logo from '../../Logo/Logo.png'

const Home = () => {
  return (
    <>
     <div id="main_content">

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
            <a className="nav-link active" data-toggle="tab" href="#menu-admin">
            Super Admin
            </a>
          </li>
        </ul>
        <div className="tab-content mt-3">
          <div className="tab-pane fade show active"
           id="menu-admin"
            role="tabpanel">
            <nav className="sidebar-nav">
              <ul className="metismenu">
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
                <li>
                  <a href="session-management">
                    <i className="fa fa-calendar-check-o"></i>
                    <span> Session Management</span>
                  </a>
                </li>
                <li>
                  <a href="fees-heads">
                    <i className="fa fa-credit-card"></i>
                    <span>Fees Heads</span>
                  </a>
                </li>
                <li>
                  <a href="transport.html">
                    <i className="fa fa-map"></i>
                    <span> Classes And Section</span>
                  </a>
                </li>
                <li>
                  <a href="transport.html">
                    <i className="fa fa-map"></i>
                    <span> Classes And Section</span>
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

    </div>
    </>
  )
}

export default Home
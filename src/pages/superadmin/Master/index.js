import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  Row,
  TabContent,
  TabPane,
  UncontrolledCollapse,
} from "reactstrap";
import Sidebar from "../../Layout/Sidebar";

const Master = () => {
  const [verticalActiveTab, setverticalActiveTab] = useState("1");
  const toggleVertical = (tab) => {
    if (verticalActiveTab !== tab) {
      setverticalActiveTab(tab);
    }
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
            <div className="row mt-4">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <ul className="metismenu">
                      <li>
                        <NavLink
                          to=""
                          onClick={() => {
                            toggleVertical("1");
                          }}
                        >
                          <span>CancelReason</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          onClick={() => {
                            toggleVertical("2");
                          }}
                        >
                          <span>Concession</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          onClick={() => {
                            toggleVertical("3");
                          }}
                        >
                          <span>Designation</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          onClick={() => {
                            toggleVertical("4");
                          }}
                        >
                          <span>Document</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          <span>Education</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          <span>Occupation</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          <span>Mother Tongue</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          <span>Nationality</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          <span>Religion</span>{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          <span>SpecialFee</span>{" "}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12">
                <Col className="col-lg-5 col-md-12 col-sm-12" >
                  <TabContent
                    activeTab={verticalActiveTab}
                    className="text-muted mt-4 mt-md-0"
                  >
                    <TabPane tabId="1">
                      <div className="card">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover text-nowrap">
                              <thead>
                                <tr>
                                  <th>Sr.No.</th>
                                  <th>Master Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>4490670573</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>4490670573</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>4490670573</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="card">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
                            <thead>
                                <tr>
                                  <th>Sr.No.</th>
                                  <th>Master Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Full Paid</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Full Paid</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Full Paid</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <p>
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney&apos;s organic lomo retro fanny
                        pack lo-fi farm-to-table readymade. Messenger bag
                        gentrify pitchfork tattooed craft beer, iphone
                        skateboard locavore carles etsy salvia banksy hoodie
                        helvetica. DIY synth PBR banksy irony. Leggings gentrify
                        squid 8-bit cred.
                      </p>
                      <p className="mb-0">
                        DIY synth PBR banksy irony. Leggings gentrify squid
                        8-bit cred pitchfork. Williamsburg banh mi whatever
                        gluten-free.
                      </p>
                    </TabPane>

                    <TabPane tabId="4">
                      <p>
                        Trust fund seitan letterpress, keytar raw denim keffiyeh
                        etsy art party before they sold out master cleanse
                        gluten-free squid scenester freegan cosby sweater. Fanny
                        pack portland seitan DIY, art party locavore wolf cliche
                        high life echo park Austin. Cred vinyl keffiyeh DIY
                        salvia PBR, banh mi before they sold out farm-to-table.
                      </p>
                      <p className="mb-0">
                        Fanny pack portland seitan DIY, art party locavore wolf
                        cliche high life echo park Austin. Cred vinyl keffiyeh
                        DIY salvia PBR, banh mi before they sold out
                        farm-to-table.
                      </p>
                    </TabPane>
                  </TabContent>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;

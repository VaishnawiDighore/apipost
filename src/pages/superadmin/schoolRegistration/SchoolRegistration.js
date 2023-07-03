import React, { useState, useEffect } from "react";
import Sidebar from "../../Layout/Sidebar";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteSchool,
  getCity,
  getSchoolOrganization,
  getSchoolRegistration,
  getState,
  registerSchool,
} from "../../../actions/SchoolRegistration";
const SchoolRegistration = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { schooldata, organizationdata, statelist, citylist } = useSelector(
    (state) => state.schoolRegister
  );
  const { createdata } = useSelector((state) => state.createSchool);
  console.log(createdata);
  const [selectedState, setSelectedState] = useState("");
  const [selectedOptions, setSelectedOptions] = useState();
  const [files1, setFiles1] = useState(null);
  const [ShowImg, setShowImg] = useState("");
  const [status, setStatus] = useState();
  // console.log(ShowImg)
  // const [showData, setShowData] = useState(false)
  // let navigate=useNavigate()
  // console.log(selectedState);
  let getcityasperstate = {
    state_id: selectedState?.value,
  };
  // console.log(getcityasperstate);
  useEffect(() => {
    if (token) {
      dispatch(getSchoolRegistration(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getSchoolOrganization(token));
      dispatch(getState(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getCity(token, getcityasperstate));
    }
  }, [dispatch, token, selectedState]);

  // console.log(schooldata, "schooldata from redux");
  // console.log(statelist, "statelist from redux");
  // console.log(citylist, "citylist  from redux");
  // console.log(organizationdata, "org data from redux");
  const orgListOption = organizationdata?.payload?.map((org) => {
    return {
      value: org.id,
      label: org.name,
    };
  });
  const stateListOption = statelist?.payload?.map((state) => {
    return {
      value: state.id,
      label: state.name,
    };
  });
  const cityListOption = citylist?.payload?.map((state) => {
    return {
      value: state.id,
      label: state.name,
    };
  });

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    setFiles1(event.target.files[0])
    const base64 = await convertBase64(file);
    setShowImg(base64);
  };

  console.log(files1)

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [data, setData] = useState([
    {
      id: 1,
      name: "Corrine Johnson",
      feeHeadCode: "Annual",
      feeHeadName: "Annual",
    },
    {
      id: 2,
      name: "Gladys Smith",
      feeHeadCode: "Tuition",
      feeHeadName: "Annual",
    },
  ]);
  const [classdata, setClassData] = useState([
    {
      id: 1,
      class: "A",
      medium: "English",
      minStrength: "30",
      maxStrength: "50",
      active: "Yes",
    },
    {
      id: 2,
      class: "A",
      medium: "English",
      minStrength: "30",
      maxStrength: "50",
      active: "No",
    },
  ]);

  const [editingCell, setEditingCell] = useState({
    rowId: null,
    property: null,
  });
  const [clickedRowId, setClickedRowId] = useState(null);

  const handleRowClick = (id, property) => {
    setEditingCell({ rowId: id, property });
  };

  const handleInputChange = (e, id, property) => {
    const newValue = e.target.value;
    // for fees Heads data mapping
    const newData = data.map((row) => {
      if (row.id === id) {
        row[property] = newValue;
      }
      return row;
    });
    setData(newData);
    // for classes & Section data mapping
    const newclassData = classdata.map((row) => {
      if (row.id === id) {
        row[property] = newValue;
      }
      return row;
    });
    setClassData(newclassData);
  };

  const handleInputBlur = () => {
    setEditingCell({ rowId: null, property: null });
  };

  // For Right Click
  const handleRowRightClick = (rowId) => {
    setClickedRowId(rowId);
  };
  const handleAddRow = () => {
    const newRowId = Math.max(...data.map((row) => row.id)) + 1;
    const newRow = { id: newRowId, name: "", feeHeadCode: "", feeHeadName: "" };
    setData([...data, newRow]);

    // for class&section
    const newClassRowId = Math.max(...classdata.map((row) => row.id)) + 1;
    const newClassRow = {
      id: newClassRowId,
      class: "",
      medium: "",
      minStrength: "",
      maxStrength: "",
      active: "",
    };
    setClassData([...classdata, newClassRow]);
  };

  const handleDeleteRow = () => {
    if (clickedRowId) {
      const newData = data.filter((row) => row.id !== clickedRowId);
      setData(newData);
      setClickedRowId(null);
      // for class&Section
      const newClassData = classdata.filter((row) => row.id !== clickedRowId);
      setClassData(newClassData);
      setClickedRowId(null);
    }
  };

  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
  ];
  const statusList = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const handleState = (e) => {
    setSelectedState(e);
  };

  function handleSelect(data) {
    setStatus(data);
  }

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      organization_id: "",
      name: "",
      contact_person: "",
      contact_number: "",
      contact_email: "",
      address: "",
      state_id: "",
      city_id: "",
      pincode: "",
      status: "",
      school_logo: "",
    },
    validationSchema: Yup.object({
      // name: Yup.string().required("This is required"),
      // contact_person: Yup.string().required("This is required"),
      // contact_email: Yup.string().required("This is required"),
      // contact_number: Yup.string().required("This is required"),
      // address: Yup.string().required("This is required"),
      // state_id: Yup.string().required("This is required"),
      // city_id: Yup.string().required("This is required"),
      // pincode: Yup.string().required("This is required"),
      // status: Yup.string().required("This is required"),
      // school_logo: Yup.mixed().required("This is required"),
    }),
    onSubmit: (values) => {
      // values.state_id = selectedState?.value;
      // values.school_logo=ShowImg
      console.log(values);
      const data = new FormData()
      data.append("organization_id", values.organization_id)
      data.append("name", values.name)
      data.append("contact_person", values.contact_person)
      data.append("contact_number", values.contact_number)
      data.append("contact_email", values.contact_email)
      data.append("address", values.address)
      data.append("school_logo", files1)
      data.append("state_id", selectedState?.value)
      data.append("city_id", values.city_id)
      data.append("pincode", values.pincode)
      data.append("status", values.status)
      dispatch(registerSchool(token, data, navigate));
    },
  });

  const formClear = () => {
    validation.resetForm();
  };

  const onDelete = (id) => {
    console.log(id);
    const did = {
      school_id: id,
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
        dispatch(deleteSchool(token, did));
        // OrgAPI.deleteOrg(did).then((res) => {
        //   Swal.fire("Deleted!", res.data.msg, "success");
        //   window.location.href = "/organization";
        // });
      }
    });
  };

  return (
    <>
      <div id="main_content">
        {/* <Sidebar showData={showData}/> */}
        <Sidebar />
        <div className="page">
          <div className="section-body">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="header-action">
                  <h1 className="page-title">School Registration</h1>
                </div>
                <ul className="nav nav-tabs page-header-tab">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#Student-all"
                    >
                      School List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#Student-add"
                    >
                      Add School
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-body mt-4">
            <div className="container-fluid">
              <div className="tab-content">
                <div className="tab-pane active" id="Student-all">
                  <div className="table-responsive card">
                    <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                      <thead>
                        <tr>
                          <th>Sr.No.</th>
                          <th>logo</th>
                          <th>School Name</th>
                          <th>Contact No.</th>
                          <th>Email</th>
                          <th>State</th>
                          <th>City</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schooldata?.school_list?.map((school, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="w60">
                              <img
                                className="avatar"
                                src="../assets/images/xs/avatar1.jpg"
                                alt=""
                              />
                            </td>
                            <td>
                              <span className="font-16">{school.name}</span>
                            </td>
                            <td>{school.contact_number}</td>
                            <td>{school.contact_email}</td>
                            <td>{school.state}</td>
                            <td>{school.city}</td>
                            <td>{school.status}</td>
                            <td className="d-flex gap-2">
                              <NavLink
                                to="#"
                                className="card-options-remove mr-3"
                                data-toggle="card-remove"
                                onClick={() => onDelete(school.id)}
                              >
                                <i class="fa fa-trash-o text-danger"></i>
                              </NavLink>
                              <NavLink
                                className="text-muted"
                                to="#"
                                // onClick={() => {
                                //   onEdit(org);
                                // }}
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

                <div className="tab-pane" id="Student-add">
                  <div className="row clearfix">
                    <div className="col-lg-2 col-md-12 col-sm-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <ul className="nav nav-tabs flex-column py-2">
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  data-toggle="tab"
                                  href="#Basic-info"
                                >
                                  {" "}
                                  Basic Info
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="tab"
                                  href="#Fees-heads"
                                >
                                  Fees Heads
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="tab"
                                  href="#Classes-section"
                                >
                                  {" "}
                                  Classes & Section
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="tab"
                                  href="#Fees-structure"
                                >
                                  Fees Structure
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-10 col-md-12 col-sm-12">
                      {/* ###################### */}
                      <div className="tab-content">
                        <div className="tab-pane active" id="Basic-info">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                              <form
                                className="card-body"
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  validation.handleSubmit();
                                  return false;
                                }}
                              >
                                 <div className="row">
                                  <div className="col-md-9">
                                  <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Organization
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <Select
                                      name="organization_id"
                                      options={orgListOption}
                                      placeholder="Select "
                                      onChange={(option) =>
                                        validation.setFieldValue(
                                          "organization_id",
                                          option.value
                                        )
                                      }
                                      onBlur={validation.handleBlur(
                                        "organization_id"
                                      )}
                                      value={orgListOption?.find(
                                        (option) =>
                                          option.value ===
                                          validation.values.organization_id
                                      )}
                                      isSearchable={true}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    School Name
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter School Name"
                                      name="name"
                                      value={validation.values.name}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Address
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Address"
                                      name="address"
                                      value={validation.values.address}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    State <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <Select
                                      options={stateListOption}
                                      placeholder="Select "
                                      value={selectedState}
                                      onChange={handleState}
                                      isSearchable={true}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    City <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <Select
                                      name="city_id"
                                      options={cityListOption}
                                      placeholder="Select "
                                      // value={selectedOptions}
                                      // onChange={handleSelect}
                                      onChange={(option) =>
                                        validation.setFieldValue(
                                          "city_id",
                                          option.value
                                        )
                                      }
                                      onBlur={validation.handleBlur("city_id")}
                                      value={cityListOption?.find(
                                        (option) =>
                                          option.value ===
                                          validation.values.city_id
                                      )}
                                      isSearchable={true}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Pincode{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter Contect Number"
                                      name="pincode"
                                      value={validation.values.pincode}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Status{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <Select
                                      name="status"
                                      options={statusList}
                                      placeholder="Select "
                                      // value={selectedOptions}
                                      // onChange={handleSelect}
                                      onChange={(option) =>
                                        validation.setFieldValue(
                                          "status",
                                          option.label
                                        )
                                      }
                                      onBlur={validation.handleBlur("status")}
                                      value={statusList.find(
                                        (option) =>
                                          option.label ===
                                          validation.values.status
                                      )}
                                      isSearchable={true}
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Contect Person{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Contect Person"
                                      name="contact_person"
                                      value={validation.values.contact_person}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Contect Number{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter Contect Number"
                                      name="contact_number"
                                      value={validation.values.contact_number}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-3 col-form-label">
                                    Contect Email{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Enter Contect Email"
                                      name="contact_email"
                                      value={validation.values.contact_email}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-2 col-form-label">
                                    School Logo
                                  </label>
                                  <div className="col-md-9">
                                    <input
                                      type="file"
                                      name="school_logo"
                                      className="dropify"
                                      accept="image/*"
                                      onChange={(e) => {
                                        handleFileRead(e)
                                          // validation.setFieldValue(
                                          //   "school_logo",
                                          //   e.target.files[0]
                                          // )
                                         
                                      }}
                                    />
                                  
                                    {/* <small
                                      id="fileHelp"
                                      className="form-text text-muted"
                                    >
                                      This is some placeholder block-level help
                                      text for the above input. It's a bit
                                      lighter and easily wraps to a new line.
                                    </small> */}
                                  </div>
                                  
                                </div>

                                  </div>
                                  <div className="col-md-3">
                                  <div className="d-flex justify-content-center">
                                      {ShowImg ? (
                                        <img
                                          alt="Cropped Img"
                                          src={ShowImg}
                                          className="crop_img"
                                          width={100}
                                        />
                                      ) : null}
                                    </div>
                                  </div>


                                 </div>
                            
                                <div className="col-sm-12 justify-content-center align-item-center mb-3">
                                  <button
                                    type="submit"
                                    className="mr-1 btn btn-primary px-5"
                                  >
                                    Save
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-outline-secondary px-5"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane" id="Fees-heads">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                              <form className="card-body">
                                <div className="form-group row">
                                  <label className="col-lg-2 col-md-2 col-form-label mr-0">
                                    {" "}
                                    Fee Head Code{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-lg-2 col-md-2 mr-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>

                                  <label className="col-lg-2 col-md-1 col-form-label ml-4 ">
                                    Fee Head Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-lg-2 col-md-2 ">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-2 col-lg-2 ml-4">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      ADD
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
                                  <thead>
                                    <tr>
                                      <th>Sr.No.</th>
                                      <th>Name</th>
                                      <th>Fee Head Code</th>
                                      <th>Fee Head Name</th>
                                      {/* <th>Status</th> */}
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="Classes-section">
                          {/* <div class="row row-deck"> */}
                          <ul className="nav nav-tabs ml-3">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#Student-all"
                              >
                                Classes & Section List
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#Student-add"
                              >
                                Add Classes & Section
                              </a>
                            </li>
                          </ul>

                          <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                            <div className="tab-content">
                              <div className="tab-pane active" id="Student-all">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="table-responsive card">
                                      <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                        <thead>
                                          <tr>
                                            <th>Sr.No.</th>
                                            <th>Class</th>
                                            <th>Medium</th>
                                            <th>Min Strength</th>
                                            <th>Max Strength</th>
                                            <th>Active</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {classdata.map((row) => (
                                            <tr
                                              key={row.id}
                                              onContextMenu={() =>
                                                handleRowRightClick(row.id)
                                              }
                                            >
                                              <td>{row.id}</td>
                                              <td
                                                onClick={() =>
                                                  handleRowClick(
                                                    row.id,
                                                    "class"
                                                  )
                                                }
                                                onBlur={handleInputBlur}
                                              >
                                                {editingCell.rowId === row.id &&
                                                editingCell.property ===
                                                  "class" ? (
                                                  <input
                                                    type="text"
                                                    value={row.class}
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        row.id,
                                                        "class"
                                                      )
                                                    }
                                                    autoFocus
                                                  />
                                                ) : (
                                                  row.class
                                                )}
                                              </td>
                                              <td
                                                onClick={() =>
                                                  handleRowClick(
                                                    row.id,
                                                    "medium"
                                                  )
                                                }
                                                onBlur={handleInputBlur}
                                              >
                                                {editingCell.rowId === row.id &&
                                                editingCell.property ===
                                                  "medium" ? (
                                                  <input
                                                    type="text"
                                                    value={row.medium}
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        row.id,
                                                        "medium"
                                                      )
                                                    }
                                                    autoFocus
                                                  />
                                                ) : (
                                                  row.medium
                                                )}
                                              </td>
                                              <td
                                                onClick={() =>
                                                  handleRowClick(
                                                    row.id,
                                                    "minStrength"
                                                  )
                                                }
                                                onBlur={handleInputBlur}
                                              >
                                                {editingCell.rowId === row.id &&
                                                editingCell.property ===
                                                  "minStrength" ? (
                                                  <input
                                                    type="text"
                                                    value={row.minStrength}
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        row.id,
                                                        "minStrength"
                                                      )
                                                    }
                                                    autoFocus
                                                  />
                                                ) : (
                                                  row.minStrength
                                                )}
                                              </td>

                                              <td
                                                onClick={() =>
                                                  handleRowClick(
                                                    row.id,
                                                    "maxStrength"
                                                  )
                                                }
                                                onBlur={handleInputBlur}
                                              >
                                                {editingCell.rowId === row.id &&
                                                editingCell.property ===
                                                  "maxStrength" ? (
                                                  <input
                                                    type="text"
                                                    value={row.maxStrength}
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        row.id,
                                                        "maxStrength"
                                                      )
                                                    }
                                                    autoFocus
                                                  />
                                                ) : (
                                                  row.maxStrength
                                                )}
                                              </td>
                                              <td
                                                onClick={() =>
                                                  handleRowClick(
                                                    row.id,
                                                    "active"
                                                  )
                                                }
                                                onBlur={handleInputBlur}
                                              >
                                                {editingCell.rowId === row.id &&
                                                editingCell.property ===
                                                  "active" ? (
                                                  <input
                                                    type="text"
                                                    value={row.active}
                                                    onChange={(e) =>
                                                      handleInputChange(
                                                        e,
                                                        row.id,
                                                        "active"
                                                      )
                                                    }
                                                    autoFocus
                                                  />
                                                ) : (
                                                  row.active
                                                )}
                                              </td>
                                              {/* <td>Yes</td> */}
                                            </tr>
                                          ))}

                                          {/* <tr>
                                                                        <td>1</td>
                                                                        <td>A</td>
                                                                        <td>English</td>
                                                                        <td>30</td>
                                                                        <td>50</td>
                                                                        <td>Yes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>A</td>
                                                                        <td>English</td>
                                                                        <td>30</td>
                                                                        <td>50</td>
                                                                        <td>No</td>
                                                                    </tr> */}
                                        </tbody>
                                      </table>
                                    </div>
                                    {clickedRowId && (
                                      <div
                                        className="context-menu"
                                        style={{ top: 0, left: 0 }}
                                      >
                                        <div
                                          className="context-menu-item"
                                          onClick={handleAddRow}
                                        >
                                          Add New Row
                                        </div>
                                        <div
                                          className="context-menu-item"
                                          onClick={handleDeleteRow}
                                        >
                                          Delete Row
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="tab-pane" id="Student-add">
                                <div className="row clearfix">
                                  <div className="col-lg-10 col-md-12 col-sm-12">
                                    <div className="card">
                                      <form className="card-body">
                                        <div className="form-group row">
                                          <label className="col-lg-2 col-md-2 col-form-label">
                                            Class Code{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-3 mr-3">
                                            <Select
                                              options={optionList}
                                              placeholder="Select Code"
                                              value={selectedOptions}
                                              onChange={handleSelect}
                                              isSearchable={true}
                                            />
                                          </div>
                                          <label className="col-md-2 col-form-label ml-5">
                                            Class Name{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="col-md-1">
                                            <button
                                              type="submit"
                                              className="btn btn-primary"
                                            >
                                              Show
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="card">
                                      <div className="card-body">
                                        <div className="row clearfix">
                                          <div className="table-responsive card">
                                            <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                              <thead>
                                                <tr>
                                                  <th></th>
                                                  <th>Sr.No.</th>
                                                  <th>Section</th>
                                                  <th>Medium</th>
                                                  <th>Min Strength</th>
                                                  <th>Max Strength</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <input
                                                      type="checkbox"
                                                      id="checkbox1"
                                                    />
                                                  </td>
                                                  <td>1</td>
                                                  <td>
                                                    <span className="font-16">
                                                      A
                                                    </span>
                                                  </td>
                                                  <td className="col-lg-2">
                                                    <Select
                                                      options={optionList}
                                                      placeholder="Select Medium"
                                                      value={selectedOptions}
                                                      onChange={handleSelect}
                                                      isSearchable={true}
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <input
                                                      type="checkbox"
                                                      id="checkbox1"
                                                    />
                                                  </td>
                                                  <td>2</td>
                                                  <td>
                                                    <span className="font-16">
                                                      B
                                                    </span>
                                                  </td>
                                                  <td className="col-lg-2">
                                                    <Select
                                                      options={optionList}
                                                      placeholder="Select Medium"
                                                      value={selectedOptions}
                                                      onChange={handleSelect}
                                                      isSearchable={true}
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <input
                                                      type="checkbox"
                                                      id="checkbox1"
                                                    />
                                                  </td>
                                                  <td>3</td>
                                                  <td>
                                                    <span className="font-16">
                                                      C
                                                    </span>
                                                  </td>
                                                  <td className="col-lg-2">
                                                    <Select
                                                      options={optionList}
                                                      placeholder="Select Medium"
                                                      value={selectedOptions}
                                                      onChange={handleSelect}
                                                      isSearchable={true}
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <input
                                                      type="checkbox"
                                                      id="checkbox1"
                                                    />
                                                  </td>
                                                  <td>4</td>
                                                  <td>
                                                    <span className="font-16">
                                                      D
                                                    </span>
                                                  </td>
                                                  <td className="col-lg-2">
                                                    <Select
                                                      options={optionList}
                                                      placeholder="Select Medium"
                                                      value={selectedOptions}
                                                      onChange={handleSelect}
                                                      isSearchable={true}
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                  <td>
                                                    <input
                                                      type="text"
                                                      className="form-control w-50"
                                                    />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 pt-2 justify-content-center align-item-center">
                                  <button
                                    type="submit"
                                    className="mr-2 btn btn-primary btn-lg "
                                  >
                                    Save
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-outline-secondary btn-lg"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                        </div>

                        <div className="tab-pane" id="Fees-structure">
                          <div class="row row-deck">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="card">
                                <form className="card-body">
                                  <div className="form-group row">
                                    <label className="col-md-2 col-form-label">
                                      Class Code :
                                      <span className="text-danger"></span>
                                    </label>
                                    <div className="col-md-3 ml-0 mr-4">
                                      <Select
                                        options={optionList}
                                        placeholder="Select Class Code"
                                        value={selectedOptions}
                                        onChange={handleSelect}
                                        isSearchable={true}
                                      />
                                    </div>
                                    <label className="col-lg-2 col-md-1 col-form-label ml-3">
                                      Concession :{" "}
                                      <span className="text-danger"></span>
                                    </label>
                                    <div className="col-md-3">
                                      <Select
                                        options={optionList}
                                        placeholder="Select Concession"
                                        value={selectedOptions}
                                        onChange={handleSelect}
                                        isSearchable={true}
                                      />
                                    </div>
                                    <div className="col-md-0">
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                      >
                                        Show
                                      </button>
                                      {/* <button type="submit" className="btn btn-outline-secondary">Show</button> */}
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="card">
                                <div className="card-body">
                                  <div className="row clearfix">
                                    <div className="table-responsive card">
                                      <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                        <thead>
                                          <tr>
                                            <th></th>
                                            <th>Sr.No.</th>
                                            <th>Fee Type</th>
                                            <th>No.of Installments</th>
                                            <th>
                                              Total Amount <br />
                                              (Annually)
                                            </th>
                                            <tr>
                                              <th colspan="2">
                                                Admission Type
                                              </th>
                                            </tr>
                                            <tr>
                                              <th>New</th>
                                              <th>Old</th>
                                            </tr>
                                            {/* <th>Action</th> */}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <input
                                                type="checkbox"
                                                id="checkbox1"
                                              />
                                            </td>
                                            <td>1</td>
                                            <td>
                                              <span className="font-16">
                                                Corrine M Johnson
                                              </span>
                                            </td>
                                            <td>1</td>
                                            <td>25000</td>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="mr-3"
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="ml-3"
                                                />
                                              </td>
                                            </tr>
                                            {/* <td><Link className="text-muted" to="/feesStructure-view"><i className="fa fa-edit"></i></Link></td> */}
                                          </tr>
                                          <tr>
                                            <td>
                                              <input
                                                type="checkbox"
                                                id="checkbox1"
                                              />
                                            </td>
                                            <td>2</td>
                                            <td>
                                              <span className="font-16">
                                                Alice A Smith
                                              </span>
                                            </td>
                                            <td>1</td>
                                            <td>25000</td>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="mr-3"
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="ml-3"
                                                />
                                              </td>
                                            </tr>
                                            {/* <td><Link className="text-muted" to="/feesStructure-view"><i className="fa fa-edit"></i></Link></td> */}
                                          </tr>
                                          <tr>
                                            <td>
                                              <input
                                                type="checkbox"
                                                id="checkbox1"
                                              />
                                            </td>
                                            <td>3</td>
                                            <td>
                                              <span className="font-16">
                                                Ken Smith
                                              </span>
                                            </td>
                                            <td>1</td>
                                            <td>25000</td>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="mr-3"
                                                />{" "}
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="ml-3"
                                                />
                                              </td>
                                            </tr>
                                            {/* <td><Link className="text-muted" to="/feesStructure-view"><i className="fa fa-edit"></i></Link></td> */}
                                          </tr>
                                          <tr>
                                            <td>
                                              <input
                                                type="checkbox"
                                                id="checkbox1"
                                              />
                                            </td>
                                            <td>4</td>
                                            <td>
                                              <span className="font-16">
                                                Gerald K Smith
                                              </span>
                                            </td>
                                            <td>1</td>
                                            <td>25000</td>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="mr-3"
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  id="checkbox1"
                                                  className="ml-3"
                                                />
                                              </td>
                                            </tr>
                                            {/* <td><Link className="text-muted" to="/feesStructure-view"><i className="fa fa-edit"></i></Link></td> */}
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 pt-2 justify-content-center align-item-center">
                            <button
                              type="submit"
                              className="mr-2 btn btn-primary btn-lg"
                            >
                              Save
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-secondary btn-lg"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* ###################### */}
                    </div>
                  </div>

                  {/* <div className="row clearfix">
                                        <div className="col-lg-8 col-md-12 col-sm-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Basic Information</h3>
                                                </div>
                                                <form className="card-body">
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">Organization <span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                            <Select
                                                                options={optionList}
                                                                placeholder="Select "
                                                                value={selectedOptions}
                                                                onChange={handleSelect}
                                                                isSearchable={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">School Name <span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                            <input type="text" className="form-control" placeholder="Enter School Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">Address <span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">State <span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                        <Select
                                                                options={optionList}
                                                                placeholder="Select "
                                                                value={selectedOptions}
                                                                onChange={handleSelect}
                                                                isSearchable={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">City <span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                        <Select
                                                                options={optionList}
                                                                placeholder="Select "
                                                                value={selectedOptions}
                                                                onChange={handleSelect}
                                                                isSearchable={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">Status <span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                        <Select
                                                                options={optionList}
                                                                placeholder="Select "
                                                                value={selectedOptions}
                                                                onChange={handleSelect}
                                                                isSearchable={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label">School Logo</label>
                                                        <div className="col-md-9">
                                                            <input type="file" className="dropify" />
                                                            <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div> */}

                  {/* <div className="col-sm-12 justify-content-center align-item-center">
                                        <button type="submit" className="mr-1 btn btn-primary px-5"
                                        // onClick={handleData}
                                        
                                        >Save</button>
                                        <button type="submit"  className="btn btn-outline-secondary px-5">Cancel</button>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolRegistration;

import React from "react";
import Home from "../pages/en/Home.js";
import Thankyou from "../pages/en/Thankyou.js";
import ForgotPassword from "../pages/password/ForgotPassword.js";
import UpdateProfile from "../pages/profile/UpdateProfile.js";
import Login from "../pages/Auth/Login.js";
import Signup from "../pages/Auth/Signup.js";
import AddSession from "../pages/superadmin/sessionManagement/AddSession.js";
import FeesHeads from "../pages/superadmin/feesHeads/FeesHeads.js";
import NotFound from "../pages/404/NotFound.js";
import SchoolRegistration from "../pages/superadmin/schoolRegistration/SchoolRegistration.js";
import Users from "../pages/superadmin/users/Users.js";
import SchoolDetails from "../pages/superadmin/schoolRegistration/SchoolDetails.js";
import UserDetails from "../pages/superadmin/users/UserDetails.js";
import FeesView from "../pages/superadmin/feesHeads/FeesView.js";
import SessionDetails from "../pages/superadmin/sessionManagement/SessionDetails.js";
import ClassesSection from "../pages/superadmin/classesSection/ClassesSection.js";
import FeesStructure from "../pages/superadmin/feesStructure/FeesStructure.js";
import Sidebar from "../pages/Layout/Sidebar.js";
// import Sidebar from "../common/Sidebar.js";
import StudentRegistration from "../pages/schooladmin/studentRegistration/StudentRegistration.js";
import StudentProfile from "../pages/schooladmin/studentProfile/StudentProfile.js";
import Admission from "../pages/schooladmin/admission/Admission.js";
import EditClassSection from "../pages/superadmin/classesSection/EditClassSection.js";
import EditFeesStructure from "../pages/superadmin/feesStructure/EditFeesStructure.js";
import Organization from "../pages/superadmin/Organization/index.js";
import Master from "../pages/superadmin/Master/index.js";
import SchoolSidebar from "../pages/Layout/SchoolSidebar.js";
import FeesData from "../pages/superadmin/feesData/FeesData.js";
import StaffMaster from "../pages/schooladmin/staffMaster/StaffMaster.js";
import Logout from "../pages/Auth/Logout.js";

const authProtectedRoutes = [
  { path: "/organization", component: <Organization/>},
  { path: "/school-registration", component: <SchoolRegistration/>},
  { path: "/edit-profile", component: <UpdateProfile /> },
  { path: "/thankyou", component: <Thankyou /> },
  { path: "/", component: <Sidebar /> },
];

const publicRoutes = [
  { path: "/school-sidebar", component: <SchoolSidebar/>},
  { path: "/login", component: <Login /> },
  {path:'/logout', component:<Logout/>},
  { path: "/signup", component: <Signup /> },
  { path: "/password/forgot", component: <ForgotPassword /> },
  { path: "/school-details", component: <SchoolDetails/>},
  { path: "/add-school", component: <FeesData/>},
  { path: "/users", component: <Users/>},
  // { path: "/fees-heads", component: <FeesHeads/>},
  { path: "/fees-details", component: <FeesView/>},
  { path: "/user-details", component: <UserDetails/>},
  { path: "/session-management", component: <AddSession/>},
  // { path: "/fees-heads", component: <FeesHeads/>},
  { path: "/session-details", component: <SessionDetails/>},
  // { path: "/classes-section", component: <ClassesSection/>},
  { path: "/classes&section-view", component: <EditClassSection/>},
  // { path: "/fees-structure", component: <FeesStructure/>},
  { path: "/feesStructure-view", component: <EditFeesStructure/>},
  { path: "/student-registration", component: <StudentRegistration/>},
  { path: "/student-profile", component: <StudentProfile/>},
  { path: "/student-admission", component: <Admission/>},
  { path: "/staff-master", component: <StaffMaster/>},
  { path: "/master", component: <Master/>},
  { path: "/*", component: <NotFound />}
];

export { authProtectedRoutes, publicRoutes };

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Logo/Logo.png";
import Vector from "../../Logo/Vector.png";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { clearError, login } from "../../actions/AuthAction";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { AuthAPI } from "../../api/authAPI";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  // const { loading, error ,isAuth, user } = useSelector((state) => state.user);
  // console.log(user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleRememberMeChange = (event) => {
  //   setRememberMe(event.target.checked);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (username === "admin" && password === "admin123") {
  //     // window.location.replace('/home');
  //     navigate("/");
  //   } else if (username === "user" && password === "user123") {
  //     navigate("/school-sidebar");
  //   } else {
  //     setError("Invalid username or password");
  //   }
  // };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      firebase_token: "",
    },

    validationSchema: Yup.object({
      // email: Yup.string().required("please enter email"),
      // password: Yup.string().required("please"),
    }),

    onSubmit: (values) => {
      console.log(values)
      loginUser(values)
      // dispatch(login(values.email,values.password));
      // navigate("/");
    },
  });
  const loginUser = value => {
    AuthAPI.login(value)
      .then(res => {
        console.log(res.data, "data")
        if (res.data.status === 200) {
          localStorage.setItem('token', res.data.temp_dict.token);
          // localStorage.setItem(
          //   "token",
          //   JSON.stringify(res.data.temp_dict.token)
          // )
          localStorage.setItem("Admin", JSON.stringify(res.data.temp_dict))
          navigate("/");
        } else {
          // Swal.fire({
          //   text: "Login Id or password may be incorrect, Please enter correct credentials",
          //   icon: "error",
          //   imageAlt: "error image",
          //   // confirmButtonColor: '#00CA84'
          // })
        }
        if(res.data.status===403 || res.data.status===503){
          alert.error(res.data.msg);
        }
      })
      .catch(function (error) {
        // Swal.fire({
        //   text: error,
        //   icon: "error",
        //   imageAlt: "error image",
        //   // confirmButtonColor: '#00CA84'
        // })
      })
  }

  // useEffect(()=>{
  //   if(error){
  //     alert.error(error);
  //     dispatch(clearError())
  //   }
  // },[dispatch,error])



  // const handleSubmit = (event) => {
    
  //   event.preventDefault();
  //   if (username === "user" && password === "user123") {
  //     navigate("/school-sidebar");
  //   }else {
  //     setError("Invalid username or password");
  //   } 
  // };

  const getData = () => {
    const requestData = {
      username: username,
      password: password
    };

    axios.post("http://65.1.147.43:8000/user_login/", requestData)
      .then((res) => {
        console.log(res.data);
        setUsername(res.data);
        setPassword(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth option3" style={{ overflowX: "hidden", height: "100vh", display: "flex", width: "100%", background: "linear-gradient(145deg, #00b5ad, #17a2b8)" }}>
      <div className="auth_center" style={{ display: "flex", width: "50%", alignItems: "center" }}>
        <div className="card" style={{ alignItems: "center", justifyContent: "center", margin: "auto", width: "80%" }}>
          <div className="card-body">
            <div className="text-center">
              <Link className="header-brand">
                <i className="fa fa-graduation-cap fa-3x m-4 brand-logo"></i>
              </Link>
              <div className="card-title mt-3" style={{ color: "black", fontSize: "30px" }}>
                Login to your account
              </div>
            </div>

            {/* {error && <div className="error">{error}</div>} */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={validation.values.email || ""}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  // style={{ background: '#87d3df', color: 'white', borderRadius: '7px', border: 'none', width: '350px', height: '35px', paddingLeft: '15px' }}
                  // style={{color: 'white', borderRadius: '7px', border: 'none', width: '350px', height: '35px', paddingLeft: '15px' }}
                  placeholder="email"
                  autoComplete="off"
                  required
                />
                <i
                  className="fa fa-user"
                  style={{
                    position: "relative",
                    bottom: "26px",
                    left: "370px",
                  }}
                ></i>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={validation.values.password || ""}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  placeholder="Password"
                  required
                  // style={{ borderRadius: '7px', height: '35px', paddingLeft: '15px' }}
                />
                <i
                  className="fa fa-eye"
                  style={{
                    position: "relative",
                    bottom: "26px",
                    left: "370px",
                  }}
                ></i>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block btn-lg" title="" onClick={getData}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="auth_right" style={{ paddingTop: "13rem", display: "flex", width: "15%", height: "100%", overflow: "hidden" }}>
        <img className="rounded-0" style={{ height: "90vh", transform: "scaleY(2)" }} src={Vector} alt="Logo" />
      </div>
      <div className="auth_center" style={{ alignItems: "center", height: "100%", display: "flex", width: "35%" }}>
        <div className="card-body">
          <div className="text-center">
            <img className="rounded-circle" style={{ width: "65%" }} src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
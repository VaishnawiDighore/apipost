import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Logo/Logo.png";
import Vector from "../../Logo/Vector.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin@admin.com" && password === "admin@123") {
      // window.location.replace('/home');
      navigate("/");
    } else if (username === "user" && password === "user123") {
      navigate("/school-sidebar");
    } else {
      setError("Invalid username or password");
    }
  };

  const getData = () => {
    axios.post("http://65.1.147.43:8000/user_login/", {

    })
      .then((res) => {
        console.log(res.data);
        setUsername(res.data);
        setPassword(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      className="auth option3"
      style={{
        overflowX: "hidden",
        height: "100vh",
        display: "flex",
        width: "100%",
        background: "linear-gradient(145deg, #00b5ad, #17a2b8)",
      }}
    >
      {/* <div className="auth_center" style={{ alignItems: 'center', display: 'flex', width: '50%', height: '100%' }}> */}
      <div
        className="auth_center"
        style={{ display: "flex", width: "50%", alignItems: "center" }}
      >
        {/* <div className="card" style={{ background: 'linear-gradient(145deg, #00b5ad, #17a2b8)', border: 'none', alignItems: 'center', width: '100%' }}> */}
        <div
          className="card"
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            width: "80%",
          }}
        >
          <div className="card-body">
            <div className="text-center">
              <Link className="header-brand">
                {" "}
                <i className="fa fa-graduation-cap fa-3x m-4 brand-logo"></i>
              </Link>
              <div
                className="card-title mt-3"
                style={{ color: "black", fontSize: "30px" }}
              >
                Login to your account
              </div>
            </div>

            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  // style={{ background: '#87d3df', color: 'white', borderRadius: '7px', border: 'none', width: '350px', height: '35px', paddingLeft: '15px' }}
                  // style={{color: 'white', borderRadius: '7px', border: 'none', width: '350px', height: '35px', paddingLeft: '15px' }}
                  placeholder="Username"
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
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
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
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  title=""
                  // onClick={() => navigate('/')}
                  // style={{ borderRadius: '40px', border: 'none', marginTop: '25px',margin:'auto', backgroundColor: '#fff', color: 'black', width: '30%', height: '32px' }}
                onClick={getData}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="auth_right"
        style={{
          paddingTop: "13rem",
          display: "flex",
          width: "15%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          className="rounded-0"
          style={{ height: "90vh", transform: "scaleY(2)" }}
          src={Vector}
          alt="Logo"
        />
      </div>
      <div
        className="auth_center"
        style={{
          alignItems: "center",
          height: "100%",
          display: "flex",
          width: "35%",
        }}
      >
        <div className="card-body">
          <div className="text-center">
            <img
              className="rounded-circle"
              style={{ width: "65%" }}
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

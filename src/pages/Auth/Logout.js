import React, { useEffect } from "react"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const admin = JSON.parse(localStorage.getItem("Admin"))

  // useEffect(() => {
  //   dispatch(logoutUser(history));
  // }, [dispatch, history]);

  useEffect(() => {
    if (admin) {
      localStorage.clear()
      window.location.href = "/login"
    } else {
      localStorage.clear()
      window.location.href = "/login"
    }
  })

  return <></>
}



export default Logout

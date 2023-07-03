import axios from "axios";
import Swal from "sweetalert2";
import {
  CITY_LIST_FAILURE,
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CREATE_SCHOOLREG_FAILURE,
  CREATE_SCHOOLREG_REQUEST,
  CREATE_SCHOOLREG_SUCCESS,
  DELETE_SCHOOLREG_FAILURE,
  DELETE_SCHOOLREG_REQUEST,
  DELETE_SCHOOLREG_SUCCESS,
  SCHOOLOREGISTRATION_FAILURE,
  SCHOOLOREGISTRATION_REQUEST,
  SCHOOLOREGISTRATION_SUCCESS,
  STATE_LIST_FAILURE,
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
} from "../Constants/SchoolRegConstant";
import { BASE_URL } from "../Config/BaseUrl";
import * as url from "../helper/url_hrlper";
import {
  ORGANIZATION_FAILD,
  ORGANIZATION_REQUIST,
  ORGANIZATION_SUCCESS,
} from "../Constants/OrganizationConstant";

export const getSchoolRegistration = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SCHOOLOREGISTRATION_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(
        `${BASE_URL}get_school_designation_list/`,
        config
      );
      const data = response.data;
      dispatch({ type: SCHOOLOREGISTRATION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SCHOOLOREGISTRATION_FAILURE,
        payload: error.response.data.detail,
      });
    }
  };
};
export const getState = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: STATE_LIST_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(`${BASE_URL}${url.GET_STATE}`, config);
      const data = response.data;
      dispatch({ type: STATE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: STATE_LIST_FAILURE,
        payload: error.response.data.detail,
      });
    }
  };
};
export const getCity = (token, getcityasperstate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CITY_LIST_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${BASE_URL}get_city_list/`,
        getcityasperstate,
        config
      );
      const data = response.data;
      dispatch({ type: CITY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CITY_LIST_FAILURE,
        payload: error.response.data.detail,
      });
    }
  };
};

export const getSchoolOrganization = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ORGANIZATION_REQUIST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${BASE_URL}get_organization/`,
        {},
        config
      );
      const data = response.data;
      dispatch({ type: ORGANIZATION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ORGANIZATION_FAILD,
        payload: error.response.data.detail,
      });
    }
  };
};


export const registerSchool = (token, getschool) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_SCHOOLREG_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${BASE_URL}register_school/`,
        getschool,
        config
      );
      const data = response.data;
      dispatch({ type: CREATE_SCHOOLREG_SUCCESS, payload: data });
      if(response.data.status===200){
        Swal.fire({
          text: response.data.msg,
          icon: "success",
          imageAlt: "success image",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/school-registration";
          }
        });
      }
    } catch (error) {
      dispatch({
        type: CREATE_SCHOOLREG_FAILURE,
        payload: error.response.data.detail,
      });
    }
  };
};
export const deleteSchool = (token, ID) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_SCHOOLREG_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${BASE_URL}delete_school_details/`,
        ID,
        config
      );
      const data = response.data;
      dispatch({ type: DELETE_SCHOOLREG_SUCCESS, payload: data });
      if(response.data.status===200){
        Swal.fire({
          text: response.data.msg,
          icon: "success",
          imageAlt: "success image",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/school-registration";
          }
        });
      }
    } catch (error) {
      dispatch({
        type: DELETE_SCHOOLREG_FAILURE,
        payload: error.response.data.detail,
      });
    }
  };
};

import axios from "axios";
import { BASE_URL } from "../Config/BaseUrl";
import {
  CLEAR_ERROR,
  CREATE_ORGANIZATION,
  GET_ORGANIZATION,
  ORGANIZATION_FAILD,
  ORGANIZATION_REQUIST,
} from "../Constants/OrganizationConstant";

export const getAllOrganization = (token) => async (dispatch) => {
  try {
    dispatch({ type: ORGANIZATION_REQUIST });
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    };
   
    const { data } = await axios.post(`${BASE_URL}get_organization/`, config);
   
    dispatch({ type: GET_ORGANIZATION, payload: data });
  } catch (error) {
    dispatch({ type: ORGANIZATION_FAILD, payload: error.response.data.detail });
  }
};

export const createOrganization = (odata) => async (dispatch) => {
  try {
    dispatch({ type: ORGANIZATION_REQUIST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}register_organization/`,
      { odata },
      config
    );
    dispatch({ type: CREATE_ORGANIZATION, payload: data });
  } catch (error) {
    dispatch({ type: ORGANIZATION_FAILD, payload: error.message });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

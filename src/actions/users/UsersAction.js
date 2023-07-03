import axios from "axios";
import { BASE_URL } from "../../Config/BaseUrl";
import {
  CLEAR_ERROR,
  CREATE_USERS,
  GET_USERS,
  USERS_FAILD,
  USER_REQUEST,
} from "../../Constants/UserSchoolConstant";

export const getAllUsers = (token) => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    };
   
    const { data } = await axios.post(`${BASE_URL}get_school_user/`, config);
   
    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    dispatch({ type: USERS_FAILD, payload: error.response.data.detail });
  }
};

export const createUsers = (udata) => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}register_school_user/`,
      { udata },
      config
    );
    dispatch({ type: CREATE_USERS, payload: data });
  } catch (error) {
    dispatch({ type: USERS_FAILD, payload: error.message });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

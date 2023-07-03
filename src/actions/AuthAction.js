import axios from "axios";
import {
    CLEAR_ERRORS,
  LOGIN_FAILD,
  LOGIN_REQUIST,
  LOGIN_SUCCESS,
} from "../Constants/UserConstant";
import { BASE_URL } from "../Config/BaseUrl";

export const login = (email, passward) => async (dispatch) => {
    console.log(email, passward)
  try {
    dispatch({ type: LOGIN_REQUIST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}user_login/`,
      { "email":email, "passward":passward},
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILD,
      payload: error.response.data.message,
    });
  }
};


export const clearError=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}
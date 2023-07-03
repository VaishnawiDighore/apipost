import {
  CLEAR_ERRORS,
  LOGIN_FAILD,
  LOGIN_REQUIST,
  LOGIN_SUCCESS,
} from "../Constants/UserConstant";

const initialState = {
  user: [],
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUIST:
      return {
        loading: true,
        // isAuth: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        // isAuth: true,
        user: action.payload,
      };

    case LOGIN_FAILD:
      return {
        ...state,
        loading: false,
        // isAuth: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

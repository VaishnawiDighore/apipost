import { CREATE_SCHOOLREG_FAILURE, CREATE_SCHOOLREG_REQUEST, CREATE_SCHOOLREG_SUCCESS, DELETE_SCHOOLREG_FAILURE, DELETE_SCHOOLREG_REQUEST, DELETE_SCHOOLREG_SUCCESS } from "../Constants/SchoolRegConstant";

const initialState = {
  createdata: null,
  deletedata: null,
  loading: false,
  error: null,
};

export const registerSchoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SCHOOLREG_REQUEST:
    case DELETE_SCHOOLREG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_SCHOOLREG_SUCCESS:
      return {
        ...state,
        createdata: action.payload,
        loading: false,
        error: null,
      };
    case DELETE_SCHOOLREG_SUCCESS:
      return {
        ...state,
        deletedata: action.payload,
        loading: false,
        error: null,
      };

    case CREATE_SCHOOLREG_FAILURE:
      case DELETE_SCHOOLREG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

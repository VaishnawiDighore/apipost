import {
  ORGANIZATION_FAILD,
  ORGANIZATION_REQUIST,
  ORGANIZATION_SUCCESS,
} from "../Constants/OrganizationConstant";
import {
  CITY_LIST_FAILURE,
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  SCHOOLOREGISTRATION_FAILURE,
  SCHOOLOREGISTRATION_REQUEST,
  SCHOOLOREGISTRATION_SUCCESS,
  STATE_LIST_FAILURE,
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
} from "../Constants/SchoolRegConstant";

const initialState = {
  schooldata: null,
  statelist: null,
  citylist: null,
  organizationdata: null,
  loading: false,
  error: null,
};

export const schoolRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHOOLOREGISTRATION_REQUEST:
    case ORGANIZATION_REQUIST:
    case STATE_LIST_REQUEST:
      case CITY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationdata: action.payload,
        loading: false,
        error: null,
      };
    case SCHOOLOREGISTRATION_SUCCESS:
      return {
        ...state,
        schooldata: action.payload,
        loading: false,
        error: null,
      };
    case STATE_LIST_SUCCESS:
      return {
        ...state,
        statelist: action.payload,
        loading: false,
        error: null,
      };
    case CITY_LIST_SUCCESS:
      return {
        ...state,
        citylist: action.payload,
        loading: false,
        error: null,
      };
    case SCHOOLOREGISTRATION_FAILURE:
    case STATE_LIST_FAILURE:
    case ORGANIZATION_FAILD:
      case CITY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

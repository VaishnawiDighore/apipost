import {
  CLEAR_ERROR,
  CREATE_ORGANIZATION,
  GET_ORGANIZATION,
  ORGANIZATION_FAILD,
  ORGANIZATION_REQUIST,
} from "../Constants/OrganizationConstant";

const initialState = {
  loading: false,
  organization: [],
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORGANIZATION_REQUIST:
      return {
        loading: true,
        organization: [],
      };
    case GET_ORGANIZATION:
      return {
        ...state,
        loading: false,
        organization: action.payload,
      };
    case CREATE_ORGANIZATION:
      return {
        ...state,
        loading: false,
        organization: action.payload,
      };
    case ORGANIZATION_FAILD:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

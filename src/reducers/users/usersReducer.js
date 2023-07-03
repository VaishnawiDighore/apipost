import{
    CLEAR_ERROR,
    CREATE_USERS,
    GET_USERS,
    USERS_FAILD,
    USER_REQUEST,
} from "../../Constants/UserSchoolConstant";
const initialState = {
    loading: false,
    school_users: [],
};
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
          return {
            loading: true,
            users: [],
          };
        case GET_USERS:
          return {
            ...state,
            loading: false,
            users: action.payload,
          };
        case CREATE_USERS:
          return {
            ...state,
            loading: false,
            users: action.payload,
          };
        case USERS_FAILD:
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
}
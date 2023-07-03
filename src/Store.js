import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";
import { organizationReducer } from "./reducers/organizationReducer";
import { userReducer } from "./reducers/userReducer";
import { schoolRegistrationReducer } from "./reducers/SchoolRegistration";
import { registerSchoolReducer } from "./reducers/RegisterSchool";

const reducer = combineReducers({
 organization:organizationReducer,
 schoolRegister:schoolRegistrationReducer,
 user:userReducer,
 createSchool:registerSchoolReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAILURE,
} from "../constants/userConstants";

export const userLoginReducer = (
  state = { userInfo: {} },
  { type, payload }
) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: payload };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, userInfo: payload };
    default:
      return state;
  }
};

export const userLogoutReducer = (action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {};
    default:
      return {};
  }
};

export const userUpdateProfileReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false, userInfo: action.payload };
    default:
      return state;
  }
};

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAILURE,
} from "../constants/userConstants";
import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`/api/v1/users/login`, {
      email,
      password,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: err,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });

  await axios.post(`/api/v1/users/logout`);
  localStorage.removeItem("userInfo");
};

export const userUpdateProfile = (profile) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const { status, data } = await axios.post(`/api/v1/users`, profile);

    if (status === 200) {
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAILURE,
      payload: err,
    });
  }
};

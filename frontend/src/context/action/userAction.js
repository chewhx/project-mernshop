import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constant/userConstant";
import axios from "axios";

export const userLogin = async (email, password, dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    console.log("user action ran here");

    const { data } = await axios.post(`/api/v1/users/login`, {
      email,
      password,
    });

    console.log(data);
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

export const userLogout = (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  console.log("user logout ran");
};

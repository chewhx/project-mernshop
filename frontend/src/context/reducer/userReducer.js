import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constant/userConstant";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from "../constant/productConstant";

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, userInfo: { loading: false } };
    case USER_LOGIN_SUCCESS:
      return { ...state, userInfo: { loading: false, data: action.payload } };
    case USER_LOGIN_FAILURE:
      return { ...state, userInfo: { loading: false, error: action.payload } };
    case USER_LOGOUT:
      return {};
    case PRODUCT_LIST_REQUEST:
      return { ...state, products: { loading: true } };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: { loading: false, data: [...action.payload] },
      };
    case PRODUCT_LIST_FAILURE:
      return { ...state, products: { loading: false, error: action.payload } };
    default:
      return state;
  }
};

export default userLoginReducer;

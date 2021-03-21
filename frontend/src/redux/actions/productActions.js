import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILURE,
} from "../constants/productConstants";
import axios from "axios";

export const getAllProducts = async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/products`);

    if (!data) {
      throw new Error();
    }

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    return {
      type: PRODUCTS_LIST_FAILURE,
      payload: err,
    };
  }
};

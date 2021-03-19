import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from "../constant/productConstant";
import axios from "axios";

export const getProducts = async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/products`);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload: err,
    });
  }
};

import { DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, POST_CART_SUCESS } from "./ActionType";
import axios from "axios"

export const getCartProductsRequestAction = () => {
    return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
    return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
    return { type: GET_CART_FAILURE };
};

export const PostCartSuccess = (payload) => {
    return { type: POST_CART_SUCESS, payload };
};

export const DeleteCartSuccess = () => {
    return { type: DELETE_CART_SUCCESS};
};

// get
export const getCartProducts = () => (dispatch) => {
    dispatch(getCartProductsRequestAction());
   return axios
     .get("https://determined-gold-jaguar.cyclic.app/cart")
     .then((res) => {
       dispatch(getCartProductsSuccessAction(res.data));
     })
     .catch((err) => {
       dispatch(getCartProductsFailureAction());
     });
};

// post
export const postCartRequest = (payload) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    axios
      .post("https://determined-gold-jaguar.cyclic.app/cart", payload)
      .then((res) => {
        dispatch(PostCartSuccess(res.data));
      })
      .then((err) => {
        dispatch(getCartProductsFailureAction());
      });
};

// delete
export const deleteCartdata = (id) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    return axios
      .delete(`https://determined-gold-jaguar.cyclic.app/cart/${id}`)
      .then((res) => {
        dispatch(DeleteCartSuccess());
      })
      .catch((err) => {
        dispatch(getCartProductsFailureAction());
      });
  
  }



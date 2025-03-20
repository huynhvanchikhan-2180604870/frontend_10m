import axios from "axios";
import { API_BASE_URL } from "../../helpers/enviroment";
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE } from "./ActionType";

export const loginUser = (loginData) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/v1/auth/login`,
        loginData
      );
  
      if (data.token) {
        localStorage.setItem("jwt", data.token);
      }
  
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.token });
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
    }
  };
  
  export const register = (registerData) => async (dispatch) => {
    try {
      const {data} = await axios.post(
        `${API_BASE_URL}/api/v1/auth/register`,
        registerData
      );
      console.log(data)
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
    }
  };
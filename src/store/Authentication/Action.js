import axios from "axios";
import { API_BASE_URL } from "../../helpers/enviroment";
import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "./ActionType";

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
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.token });
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
    }
  };
  export const getUserProfile = (jwt) => async (dispatch) => {
    try {
      console.log(jwt)
      const {data} = await axios.get(
        `${API_BASE_URL}/api/v2/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(data)
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
    }
  };
  export const logout = () => async () => {
    localStorage.removeItem('jwt')
  };


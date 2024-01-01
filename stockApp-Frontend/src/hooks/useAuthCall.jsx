import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_BASE_URL;

  const login = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${URL}/auth/login`, values);
      toastSuccessNotify("Login performed");
      dispatch(loginSuccess(data));
      console.log(data);
      navigate("/stock");
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${URL}/auth/logout`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Logout not succesful");
    }
  };
  const register = async (values) => {
    dispatch(fetchStart());
    try {
      console.log(values);
      const { data } = await axios.post(`${URL}/users`, values);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successful");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      const errorMessage = error?.response?.data?.message?.includes("E11000")
        ? "User name  or Email has been used before"
        : "Register failed";

      toastErrorNotify(errorMessage);
    }
  };
  return { login, logout, register };
};

export default useAuthCall;

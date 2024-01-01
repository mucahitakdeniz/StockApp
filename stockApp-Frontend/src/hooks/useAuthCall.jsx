import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
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
      toastErrorNotify("Logout not succesfull");
    }
  };
  return { login, logout };
};

export default useAuthCall;

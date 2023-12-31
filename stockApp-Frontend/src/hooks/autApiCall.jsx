import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

export const login = async (values) => {
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_BASE_URL;

  try {
    const { data } = await axios.post(`${URL}/auth/login`, values);
    toastSuccessNotify("Login performed");
    navigate("/stock");
    console.log(data);
  } catch (error) {
    console.log(error);
    toastErrorNotify("Login not succesful");
  }
};

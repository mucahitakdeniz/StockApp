import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { useSelector } from "react-redux";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getStockFunction = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify("Succesfuly deleted");
      dispatch(getStockSuccess({ url, data }));
      //console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };
  const deleteFunction = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}/${url}/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      getStockFunction(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };
  const createFunction = async (url, data) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}/${url}/`,
        {
          headers: { Authorization: `Token ${token}` },
        },
        data
      );
      getStockFunction(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };

  return { getStockFunction, deleteFunction };
};

export default useStockCall;

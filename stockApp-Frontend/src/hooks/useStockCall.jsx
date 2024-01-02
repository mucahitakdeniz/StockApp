import axios from "axios";
import { toastErrorNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { useSelector } from "react-redux";


const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;



  const getStockFonction = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getStockSuccess(url, data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };
  

  return { getStockFonction };
};

export default useStockCall;

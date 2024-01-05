import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStockFunction = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}`);
      dispatch(getStockSuccess({ url, data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };
  const deleteStockFunction = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}`);
      toastSuccessNotify("Deletion successful");

     getStockFunction(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Delete failed");
    }
  };
  // const createFunction = async (url, data) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.post(`/${url}/`, data);
  //     getStockFunction(url);
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //     toastErrorNotify(error.response.data.message);
  //   }
  //};

  return { getStockFunction, deleteStockFunction };
};

export default useStockCall;

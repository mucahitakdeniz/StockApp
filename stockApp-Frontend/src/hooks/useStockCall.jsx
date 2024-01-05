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
      toastErrorNotify(
        error?.response?.data?.message || "Something went wrong"
      );
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
  const createStockFunction = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, info);
      getStockFunction(url);
      toastSuccessNotify("Creation process successful");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      const errorMessage = error?.response?.data?.message?.includes("E11000")
        ? "Warning: This company/product has been created before"
        : "Creation failed";

      toastErrorNotify(errorMessage);
    }
  };

  return { getStockFunction, deleteStockFunction, createStockFunction };
};

export default useStockCall;

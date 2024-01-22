import {
  fetchStart,
  fetchFail,
  createUserSuccess,
  updateUserSuccess,
  getUserSuccess,
} from "../features/userSlice";
import { useDispatch } from "react-redux";

import useAxios from "./useAxios";

const useUserCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();


  const getUserFunction = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get("users");
      dispatch(getUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  
  return { getUserFunction };
};

export default useUserCall;

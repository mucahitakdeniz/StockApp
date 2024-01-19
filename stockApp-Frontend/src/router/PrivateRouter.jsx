import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  toastWarnNotify("You must login");
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";

const Users = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin) {
            toastWarnNotify("You must admin");
            navigate("/stock");
    }}, [])
    

  

  return <div>Users</div>;
};

export default Users;

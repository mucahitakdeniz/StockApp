import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";
import { Typography } from "@mui/material";
import UsersTable from "../components/UsersTable";
import useUserCall from "../hooks/useUserCall";
import { useSelector } from "react-redux";


const Users = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { getUserFunction } = useUserCall();

  useEffect(() => {
    if (!isAdmin) {
      toastWarnNotify("You must admin");
      navigate("/stock");
    } else {
      getUserFunction();
    }
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={5}>
        Users
      </Typography>
    
      <UsersTable />
    </div>
  );
};

export default Users;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";
import { Typography } from "@mui/material";
import UsersTable from "../components/UsersTable";
import { useSelector } from "react-redux";
import useUserCall from "../hooks/useUserCall";

const Users = () => {
  const { getUserFunction } = useUserCall();
  const { isAdmin } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      toastWarnNotify("You must admin");
      navigate("/stock");
    }
    getUserFunction();
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

import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { toastErrorNotify } from "../helper/ToastNotify";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getFirmSSuccess } from "../features/stockSlice";

const Firms = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const getFims = async () => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/firms`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getFirmSSuccess(data));
      setData(data);
      console.log(data);
    } catch (error) {
      dispatch(fetchFail);

      toastErrorNotify(error.response.data.message);
    }
  };

  useEffect(() => {
    getFims();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Box>
        <Cards  data={data} />
      </Box>
    </div>
  );
};

export default Firms;

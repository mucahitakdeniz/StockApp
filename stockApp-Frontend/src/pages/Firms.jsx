import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { toastErrorNotify } from "../helper/ToastNotify";
import Cards from "../components/Cards";
import { Box } from "@mui/material";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const getFims = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/firms`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      setData(data);
    } catch (error) {
      toastErrorNotify(error.response.data.message);
    }
    return data;
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
        {data.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default Firms;

import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Purchase = () => {
  const { getStockFunction } = useStockCall();
  const { purchases } = useSelector((state) => state.stock);
  useEffect(() => {
    getStockFunction("purchases");
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Purchases
      </Typography>
      <Button variant="contained" sx={{mb:4}}>New Purchases</Button>
      <Box>
      </Box>
    </div>
  );
};

export default Purchase;

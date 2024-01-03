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
  console.log(purchases);
  useEffect(() => {
    getStockFunction("purchases");
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Purchases
      </Typography>
      <Button variant="contained">New Purchases</Button>
      <Box>
        <Cards data={purchases} />
      </Box>
    </div>
  );
};

export default Purchase;

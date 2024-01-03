import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Sales = () => {
  const { getStockFonction } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
console.log(sales);
  useEffect(() => {
    getStockFonction("sales");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Sales
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Box>
        <Cards data={sales} />
      </Box>
    </div>
  );
};

export default Sales;

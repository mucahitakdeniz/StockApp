import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Firms = () => {
  const { getStockFunction } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockFunction(firms);
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Box>
        <Cards data={firms} url={"firms"} />
      </Box>
    </div>
  );
};

export default Firms;

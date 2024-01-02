import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const Firms = () => {
  const { getStockFonction } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockFonction("firms");
    console.log(firms)
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Box>
        <Cards data={firms} />
      </Box>
    </div>
  );
};

export default Firms;

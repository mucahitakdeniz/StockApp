import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";



const Brands = () => {
  const { getStockFonction } = useStockCall();
  const { brands } = useSelector((state) => state.stock);
  console.log(brands);

  useEffect(() => {
    getStockFonction("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Brands
      </Typography>
      <Button variant="contained">New Brands</Button>
      <Box>
       <Cards data={brands} />
      </Box>
    </div>
  );
};

export default Brands;

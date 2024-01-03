import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Products = () => {
  const { getStockFunction } = useStockCall();
  const { products } = useSelector((state) => state.stock);
console.log(products);
  useEffect(() => {
    getStockFunction("products");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Products
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Box>
        <Cards data={products} />
      </Box>
    </div>
  );
};

export default Products;

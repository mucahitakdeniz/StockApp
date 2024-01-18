import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import SaleModal from "../components/SaleModal";
import SalesTable from "../components/SalesTable";

const Sales = () => {
  const { getProdSalesBrands } = useStockCall();
  const { sales } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      product_id: "",
      brand_id: "",
      quantity: "",
      price: "",
    });
  };
  useEffect(() => {
    getProdSalesBrands();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Sales
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 4 }}>
        New Sales
      </Button>
      <SaleModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
      <Box>
        <SalesTable />
      </Box>
    </div>
  );
};

export default Sales;

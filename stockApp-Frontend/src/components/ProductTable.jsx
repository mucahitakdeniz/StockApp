import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globasStyles";
import useStockCall from "../hooks/useStockCall";

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStockFunction } = useStockCall();
  const columns = [
    { field: "id", headerName: "#", headerAling: "center", flex: 2 },
    {
      field: "name",
      headerName: "Category",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },

    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },
    {
      field: "createds",
      headerName: "Creation date",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },
    {
      field: "category_id",
      headerName: "Category",
      headerAling: "center",
      aling: "center",
      renderCell: (params) => (
        <Typography> {params.row.category_id.name}</Typography>
      ),
      flex: 1,
    },
    {
      field: "brand_id",
      headerName: "Category",
      headerAling: "center",
      aling: "center",
      renderCell: (params) => (
        <Typography> {params.row.brand_id.name}</Typography>
      ),
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      headerAling: "center",
      aling: "center",
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => {
            deleteStockFunction("products", id);
          }}
          label="Delete"
          sx={btnStyle}
        />,
      ],
      flex: 1,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

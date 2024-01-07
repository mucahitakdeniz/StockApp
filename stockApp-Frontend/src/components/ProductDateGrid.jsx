import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const ProductDateGrid = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      editable: true,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
      editable: true,
      type: "number"
    },
    
  ];
  const rows = [
    { id: 1, name: 'Snow', firstName: 'Jon', stock: 14 },
    { id: 2, name: 'Lannister', firstName: 'Cersei', stock: 31 },
    { id: 3, name: 'Lannister', firstName: 'Jaime', stock: 31 },
    { id: 4, name: 'Stark', firstName: 'Arya', stock: 11 },
    { id: 5, name: 'Targaryen', firstName: 'Daenerys', stock: 0 },
    { id: 6, name: 'Melisandre', firstName: null, stock: 150 },
    { id: 7, name: 'Clifford', firstName: 'Ferrara', stock: 44 },
    { id: 8, name: 'Frances', firstName: 'Rossini', stock: 36 },
    { id: 9, name: 'Roxie', firstName: 'Harvey', stock: 65 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default ProductDateGrid

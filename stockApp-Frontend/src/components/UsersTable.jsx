import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globasStyles";
import useStockCall from "../hooks/useStockCall";
import EditIcon from "@mui/icons-material/Edit";

const UsersTable = () => {

  const { users } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "# ID", headerAling: "center", flex: 2 },
    {
      field: "username",
      headerName: "User Name",
      headerAling: "center",
      flex: 1.5,
    },
    {
      field: "first_name",
      headerName: "Firts Name",
      headerAling: "center",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      headerAling: "center",
      flex: 1,
      color: "red",
    },
    { field: "email", headerName: "Email", headerAling: "center", flex: 2 },
    {
      field: "is_superadmin",
      type: "boolean",
      headerName: "Admin",
      headerAling: "center",
      flex: 0.5,
    },
    {
      field: "is_staff",
      type: "boolean",
      headerName: "Staff",
      headerAling: "center",
      flex: 0.5,
    },
    {
      field: "is_active",
      headerName: "Active",
      headerAling: "center",
      type: "boolean",
      flex: 0.5,
    },
  ];


  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={users}
        columns={columns}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default UsersTable;

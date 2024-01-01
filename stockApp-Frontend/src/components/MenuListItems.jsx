import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StoreIcon from "@mui/icons-material/Store";
import SellIcon from "@mui/icons-material/Sell";
import FactoryIcon from "@mui/icons-material/Factory";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const icons = [
  {
    icon: <SpaceDashboardIcon />,
    title: "Dahboard",
    url: "/stock",
  },
  {
    icon: <LocalGroceryStoreIcon />,
    title: "Purchase",
    url: "/stock/purchase",
  },
  {
    icon: <MonetizationOnIcon />,
    title: "Sales",
    url: "/stock/sales",
  },
  {
    icon: <StoreIcon />,
    title: "Firms",
    url: "/stock/firms",
  },
  {
    icon: <SellIcon />,
    title: "Brands",
    url: "/stock/brands",
  },
  {
    icon: <FactoryIcon />,
    title: "Products",
    url: "/stock/products",
  },
];

export const MenuListItems = () => {
  const [click, setClick] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <List>
        {icons.map((icon, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => {
              navigate(icon.url);
              setClick(index);
            }}
            sx={{
              color: "white",
              "&:hover": { color: "red" },
              "&:hover .MuiSvgIcon-root": { color: "red" },
              backgroundColor: click == index && "orange",
            }}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{ color: "white", "&:hover": { color: "red" } }}
              >
                {icon.icon}
              </ListItemIcon>
              <ListItemText primary={icon.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

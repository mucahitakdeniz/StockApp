import React from "react";
import Typography from "@mui/material/Typography";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Dashboard
      </Typography>
      <KpiCards />
      <Charts />
    </div>
  );
};

export default Home;

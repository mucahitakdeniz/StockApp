import { Card, Grid, LineChart, Title } from "@tremor/react";

const Charts = ({ sales, purchases }) => {
  const dataFormatter = (number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

  const salesData = sales?.map((item) => ({
    date: item.createds,
    price: +item.price_total,
    quantity: item.quantity,
  }));
  const purchaesData = purchases?.map((item) => ({
    date: item.createds,
    price: +item.price_total,
    quantity: item.quantity,
  }));
  return (
    <Grid container spacing={123456}>
      <Grid key={1} item>
        <Card>
          <Title>Total Sales</Title>
          <LineChart
            className="mt-6"
            data={salesData}
            index="date"
            categories={["quantity", "price"]}
            colors={["red", "blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
      <Grid key={2} item>
        <Card>
          <Title>Total Purchases</Title>
          <LineChart
            className="mt-6"
            data={purchaesData}
            index="date"
            categories={["quantity", "price"]}
            colors={["red", "blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Charts;

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../hooks/useStockCall";
import { btnStyle } from "../styles/globasStyles";

const Cards = ({ data }) => {
  //const { deleteFunction } = useStockCall();
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {data?.map((item, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              boxShadow: 17,
              width: 350,
              height: 450,
              borderRadius: 4,
              margin: 2,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              m={2}
              color={"error"}
              component="div"
            >
              {item?.name}
            </Typography>
            {item?.address && (
              <Typography variant="body2" color="text.secondary">
                Adress : {item.address}
              </Typography>
            )}
            {item?.phone && (
              <Typography variant="body2" color="text.secondary">
                Phone: {item.phone}
              </Typography>
            )}
            <br />
            {item?.price !== undefined && (
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
            )}
            {item?.price_total !== undefined && (
              <Typography variant="body2" color="text.secondary">
                Total Price: {item.price_total}
              </Typography>
            )}
            {item?.quantity !== undefined && (
              <Typography variant="body2" color="text.secondary">
                Quantity : {item.quantity}
              </Typography>
            )}
            {item?.stock !== undefined && (
              <Typography variant="body2" color="text.secondary">
                Stock: {item.stock}
              </Typography>
            )}
            {item?.brand_id?.name && (
              <Typography variant="body2" color="text.secondary">
                Brand: {item.brand_id.name}
              </Typography>
            )}
            {item?.category_id?.name !== undefined && (
              <Typography variant="body2" color="text.secondary">
                Category: {item?.category_id?.name}
              </Typography>
            )}
            {item?.product_id?.name !== undefined && (
              <Typography variant="body2" color="text.secondary">
                Product: {item.product_id.name}
              </Typography>
            )}
            {item?.image && (
              <CardMedia
                component="img"
                image={item.image}
                title={item.name}
                sx={{
                  objectFit: "contain",
                  maxHeight: 175,
                  width: 200,
                  margin:"auto"
                }}
              />
            )}
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
              }}
            >
              <EditIcon sx={btnStyle} />
              <DeleteIcon sx={btnStyle} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;

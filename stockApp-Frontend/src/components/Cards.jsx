import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemIcon from "@mui/material/ListItemIcon";

const Cards = ({ data }) => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, marginTop: 3 }}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Card
            sx={{
              boxShadow: 17,
              maxWidth: 350,
              height: 450,
              borderRadius: 4,
              margin: 2,
              padding: 1,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                m={2}
                color={"error"}
                component="div"
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Adress : {item.address}
              </Typography>
              <br />
              <Typography variant="body2" color="text.secondary">
                Phone: {item.phone}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={item.image}
              title={item.name}
              sx={{ maxWidth: 300, maxHeight: 200, padding: 5 }}
            />
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button size="small">
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
              </Button>
              <Button size="small">
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </Button>
            </CardActions>
            
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import styles from "./CardHome.module.css";
// import Grid from "@mui/material";

const CardHome = (props) => {
  return (
    <Grid
      my={4}
      sm={12}
      md={6}
      lg={4}
      display="flex"
      justifyContent="center"
      key={props.key}
    >
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 345,
          maxHeight: 342,
          // pb: 6
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.gambar}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles.lineClamp}
            >
              {props.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardHome;

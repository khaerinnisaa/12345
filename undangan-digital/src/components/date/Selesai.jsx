import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import Bunga from "../../assets/bunga.png";

 const Selesai = (props) => {
    return ( 
        <Box sx={{ backgroundColor: "#6D5C4D" }}>
      <Card
        sx={{
          marginTop: "-50px",
          width: "100vw",
          position: "absolute",
          background: "none",
          border: "none",
          boxShadow: "none",
          //   backgroundColor: "aqua",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{ maxWidth: "250px" }}
          component="img"
          //   height="140"
          image={Bunga}
          alt="green iguana"
        />
      </Card>
      <Stack pt={14} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            fontSize: "32px",
            color: "white",
            fontWeight: 600,
          }}
        >
          {props.jadwal}
        </Typography>
        <Typography
          mt={1}
          sx={{
            fontFamily: "Bonheur Royale",
            fontSize: "52px",
            color: "white",
            // fontWeight: 400,
          }}
        >
          Save The Date
        </Typography>
      </Stack>
      <Box mt={4} pb={12}>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Pinyon Script",
              color: "white",
              fontSize: {xs: "50px",sm: "60px",md: "80px",lg: "80px"},
              fontWeight: 400,
              textAlign: "center"
            }}
          >
            "Acara telah selesai"
          </Typography>
          
        </Stack>
        
      </Box>
    </Box>
     );
 }
  
 export default Selesai;
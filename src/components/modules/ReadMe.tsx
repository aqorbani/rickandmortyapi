import { Button, Card, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router";
import InstallBTN from "./InstallBTN";

export default function ReadMe() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "#689f38",
        color: "#fff",
        fontSize: "1.5vw",
      }}
    >
      <Card sx={{ maxWidth: 345, mb: "40px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/img/rm.jpeg"
        />
      </Card>
      <Typography variant="h5" component="h5" sx={{ mb: "20px" }}>
        Hello my friend...
      </Typography>
      <Typography variant="body1" component="h6" sx={{ mb: "40px" }}>
        Click the "LET'S START" button to see the Ricky and Morty characters.
      </Typography>
      <Link to="/characters">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            "&:hover": {
              borderColor: "#fff",
              bgcolor: "green",
            },
            fontWeight: "bolder",
          }}
        >
          Let's start
        </Button>
      </Link>
      <InstallBTN />
    </Box>
  );
}

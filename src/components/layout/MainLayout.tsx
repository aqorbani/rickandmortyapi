import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import CharacterList from "../modules/CharacterList";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router";
import SearchBox from "../modules/SearchBox";

const MainLayout = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");

  const pageHandler = (status: string) => {
    switch (status) {
      case "+":
        if (page < limit) {
          setPage((prevPage) => prevPage + 1);
        }
        break;
      case "-":
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
        break;
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor:"#dcedc8"
      }}
    >
      <Box sx={{ mb: "10px" }}>
        <AppBar position="static" sx={{ fontSize: 40, bgcolor: "#689f38" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            {page > 1 && (
              <Button color="inherit" onClick={() => pageHandler("-")}>
                <NavigateBefore />
                previous
              </Button>
            )}
            <Typography
              variant="body1"
              component="div"
              sx={{ bgcolor: "#4caf50", p: 1 }}
            >
              {` ${page} `}
            </Typography>
            {page != limit && (
              <Button color="inherit" onClick={() => pageHandler("+")}>
                next
                <NavigateNextIcon />
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid size={6}>
          <Typography variant="h4" gutterBottom>
            Rick and Morty Characters
          </Typography>
        </Grid>
        <Grid size={6} sx={{ direction: "rtl" }}>
          <SearchBox setSearch={setSearch} setPage={setPage} />
        </Grid>
      </Grid>
      <CharacterList page={page} setLimit={setLimit} search={search} />
    </Container>
  );
};

export default MainLayout;

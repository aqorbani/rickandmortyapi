import { Container, Grid, Typography } from "@mui/material";
import CharacterList from "../modules/CharacterList";
import { useState } from "react";
import SearchBox from "../modules/SearchBox";
import Menu from "../modules/Menu";

const MainLayout = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor: "#dcedc8",
      }}
    >
      <Menu limit={limit} page={page} setPage={setPage} />
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

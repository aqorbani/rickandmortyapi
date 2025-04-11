import { useState } from "react";
import { Container, Grid } from "@mui/material";
import CharacterList from "../modules/CharacterList";
import Menu from "../modules/Menu";
import Toolbar from "../modules/Toolbar";

const MainLayout = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");

  return (
    <Container
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor: "#e6ee9c",
        p: "0!important",
      }}
    >
      <Menu limit={limit} page={page} setPage={setPage} />
      <Grid sx={{p:2}}>
        <Toolbar setSearch={setSearch} setPage={setPage} />
        <CharacterList page={page} setLimit={setLimit} search={search} />
      </Grid>
    </Container>
  );
};

export default MainLayout;

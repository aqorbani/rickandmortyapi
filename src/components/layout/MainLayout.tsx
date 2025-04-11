import { useState } from "react";
import { Container } from "@mui/material";
import CharacterList from "../modules/CharacterList";
import Menu from "../modules/Menu";
import Toolbar from "../modules/Toolbar";

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
      <Toolbar setSearch={setSearch} setPage={setPage} />
      <CharacterList page={page} setLimit={setLimit} search={search} />
    </Container>
  );
};

export default MainLayout;

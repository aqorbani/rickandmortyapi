import { Grid, Typography } from "@mui/material";
import SearchBox from "./SearchBox";

interface ChildProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Toolbar: React.FC<ChildProps> = ({ setPage, setSearch }) => {
  return (
    <Grid container sx={{ mb: 1 }}>
      <Grid size={6}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: "3vw" }}>
          Rick and Morty Characters
        </Typography>
      </Grid>
      <Grid size={6} sx={{ direction: "rtl" }}>
        <SearchBox setSearch={setSearch} setPage={setPage} />
      </Grid>
    </Grid>
  );
};

export default Toolbar;

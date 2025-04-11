import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

interface ChildProps {
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Menu: React.FC<ChildProps> = ({ limit, page, setPage }) => {
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
    <Box sx={{ mb: "10px" }}>
      <AppBar position="static" sx={{ fontSize: 40, bgcolor: "#689f38" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
            <Link to="/favorites">
              <FavoriteIcon />
            </Link>
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
  );
};

export default Menu;

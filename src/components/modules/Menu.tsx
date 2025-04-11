import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";

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
    <AppBar position="sticky" sx={{ mb: 3, bgcolor: "#cddc39", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <IconButton component={Link} to="/" color="default">
            <CottageIcon />
          </IconButton>
          <IconButton component={Link} to="/favorites" color="default">
            <FavoriteIcon />
          </IconButton>
        </div>
        <div className="pagination">
          {page > 1 && (
            <Button color="inherit" onClick={() => pageHandler("-")}>
              <NavigateBefore />
              previous
            </Button>
          )}
          <Typography
            variant="body1"
            component="div"
            sx={{ bgcolor: "#dce775", p: 1 }}
          >
            {` ${page} `}
          </Typography>
          {page != limit && (
            <Button color="inherit" onClick={() => pageHandler("+")}>
              next
              <NavigateNextIcon />
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

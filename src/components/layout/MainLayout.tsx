import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import CharacterList from "../modules/CharacterList";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";

const MainLayout = () => {
  return (
    <Container maxWidth={false}>
      <Box sx={{mb:"10px"}}>
        <AppBar position="static" sx={{ fontSize: 40,bgcolor: '#689f38' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <NavigateBefore />
              previous
            </Button>
            <Button color="inherit">
              next
              <NavigateNextIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography variant="h4" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <CharacterList />
    </Container>
  );
};

export default MainLayout;

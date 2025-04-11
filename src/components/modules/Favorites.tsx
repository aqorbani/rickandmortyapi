import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { RootState } from "../../store/store";
import { Link } from "react-router";
import { addFavorite, removeFavorite } from "../../store/favoriteSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = (id: string) => favorites.some((c) => c.id === id);

  if (favorites.length === 0) {
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
        هیچ شخصیتی به علاقه‌مندی‌ها اضافه نشده!
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {favorites.map((char) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={char.id}>
          <Card>
            <Link to={"/characters/" + char.id}>
              <CardMedia
                component="img"
                height="250"
                image={char.image}
                alt={char.name}
              />
            </Link>
            <IconButton
              onClick={() =>
                isFavorite(char.id)
                  ? dispatch(removeFavorite(char.id))
                  : dispatch(addFavorite(char))
              }
            >
              {isFavorite(char.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Link to={"/characters/" + char.id}>
              <CardContent sx={{ color: "#000" }}>
                <Typography variant="h6">{char.name}</Typography>
                <Typography variant="body2">
                  {char.species} - {char.status}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Favorites;

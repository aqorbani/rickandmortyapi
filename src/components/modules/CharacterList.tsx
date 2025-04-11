import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../../store/store";
import { addFavorite, removeFavorite } from "../../store/favoriteSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
};

type CharactersData = {
  characters: {
    info: { pages: number };
    results: Character[];
  };
};

interface ChildProps {
  page: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  search: string;
}

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

const CharacterList: React.FC<ChildProps> = ({ page, setLimit, search }) => {
  const { data, loading, error } = useQuery<CharactersData>(GET_CHARACTERS, {
    variables: {
      page,
      filter: search.trim() ? { name: search } : {},
    },
  });

  useEffect(() => {
    setLimit(data?.characters?.info?.pages as number);
  }, [data]);

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = (id: string) => favorites.some((c) => c.id === id);

  if (loading) return <LinearProgress color="success" />;
  if (error)
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
        Error loading characters!
      </Typography>
    );
  if (data?.characters.results.length === 0)
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
        Not Found
      </Typography>
    );

  return (
    <Grid container spacing={3} pb={2}>
      {data?.characters.results.map((char) => (
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

export default CharacterList;

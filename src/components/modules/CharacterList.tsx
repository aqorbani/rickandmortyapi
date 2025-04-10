import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
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

type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
};

type CharactersData = {
  characters: {
    results: Character[];
  };
};

const CharacterList = () => {
  const { data, loading, error } = useQuery<CharactersData>(GET_CHARACTERS);

  if (loading) return <LinearProgress color="success" />;
  if (error) return <p>Error loading characters</p>;

  return (
    <Grid container spacing={2}>
      {data?.characters.results.map((char) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={char.id}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={char.image}
              alt={char.name}
            />
            <CardContent>
              <Typography variant="h6">{char.name}</Typography>
              <Typography variant="body2">
                {char.species} - {char.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;

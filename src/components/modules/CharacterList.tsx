import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router";

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

  if (loading) return <LinearProgress color="success" />;
  if (error) return <p>Error loading characters</p>;

  return (
    <Grid container spacing={3} pb={2}>
      {data?.characters.results.map((char) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={char.id}>
          <Link to={"/characters/" + char.id}>
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
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;

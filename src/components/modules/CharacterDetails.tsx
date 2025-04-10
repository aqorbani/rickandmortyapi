import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      image
    }
  }
`;

const CharacterDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data?.character) return <p>Character not found</p>;

  const char = data.character;

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor: "#dcedc8",
        pt: 4,
      }}
    >
      <Card sx={{ maxWidth: 400, margin: "auto" }}>
        <CardMedia
          component="img"
          height="400"
          image={char.image}
          alt={char.name}
        />
        <CardContent>
          <Typography variant="h5">{char.name}</Typography>
          <Typography>Species: {char.species}</Typography>
          <Typography>Status: {char.status}</Typography>
          <Typography>Gender: {char.gender}</Typography>
          <Typography>Origin: {char.origin.name}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CharacterDetails;

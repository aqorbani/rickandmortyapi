import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
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

  if (loading) return <LinearProgress color="success" />;
  if (error || !data?.character)
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
        Character not found
      </Typography>
    );

  const char = data.character;

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor: "#e6ee9c",
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

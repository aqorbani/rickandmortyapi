import Box from "@mui/material/Box";
import { Link } from "react-router";

export default function ReadMe() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      Click the button to see the Ricky and Morty characters.
      <Link to="/characters">Let's start</Link>
    </Box>
  );
}

import { Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import ReadMe from "./components/modules/ReadMe";
import CharacterDetails from "./components/modules/CharacterDetails";
import Favorites from "./components/modules/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReadMe />} />
      <Route path="/characters" element={<MainLayout />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;

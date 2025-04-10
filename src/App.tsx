import { Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import ReadMe from "./components/modules/ReadMe";
import CharacterDetails from "./components/modules/CharacterDetails";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ReadMe />} />
      <Route path="/characters" element={<MainLayout />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import ReadMe from "./components/modules/ReadMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReadMe />} />
      <Route path="/characters" element={<MainLayout />} />
    </Routes>
  );
}

export default App;

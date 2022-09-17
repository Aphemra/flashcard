import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter basename={"/flashcard/"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

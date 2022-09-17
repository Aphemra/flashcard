import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useLocalState from "../hooks/useLocalState";

function Layout() {
  const [cards, setCards] = useLocalState("cards", []);
  return (
    <>
      <NavBar allCards={cards} addCard={setCards} />
      <Outlet context={[cards, setCards]} />
    </>
  );
}

export default Layout;

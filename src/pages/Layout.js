import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useLocalState from "../hooks/useLocalState";

// TODO: Might have to reevaluate how the cards local state works...
// Will likely get rid of it in favor of the decks parent object.
function Layout() {
	const [decks, setDecks] = useLocalState("decks", []);
	const [cards, setCards] = useLocalState("cards", []);
	return (
		<>
			<NavBar allCards={cards} addCard={setCards} />
			<Outlet context={{ cards, setCards, decks, setDecks }} />
		</>
	);
}

export default Layout;

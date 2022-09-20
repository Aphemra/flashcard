import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useLocalState from "../hooks/useLocalState";

function Layout() {
	const [decks, setDecks] = useLocalState("decks", []);
	const [cards, setCards] = useLocalState("cards", []);
	const [currentDeckID, setCurrentDeckID] = useLocalState("selectedDeckID", "");

	return (
		<>
			<NavBar />
			<div className="content">
				<Outlet context={{ cards, setCards, decks, setDecks, currentDeckID, setCurrentDeckID }} />
			</div>
		</>
	);
}

export default Layout;

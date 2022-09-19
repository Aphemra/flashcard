import { BrowserRouter, Route, Routes } from "react-router-dom";
import Decks from "./pages/Decks";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Quiz from "./pages/Quiz";
import NoPage from "./pages/NoPage";

function App() {
	return (
		<BrowserRouter basename={"/flashcard/"}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/decks" element={<Decks />} />
					<Route path="/cards" element={<Cards />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

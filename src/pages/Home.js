import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<div className="home-container">
				<h1 className="home-title">Welcome to Flashcard!</h1>
				<div className="home-control-button">
					<Link className="home-link" to="/decks">
						Get Started!
					</Link>
				</div>
			</div>
		</>
	);
}

export default Home;

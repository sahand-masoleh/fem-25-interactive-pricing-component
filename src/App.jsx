import "./styles/App.scss";
import Container from "./components/Container";

function App() {
	return (
		<div className="app">
			<Container />
			<footer className="footer">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io/"
					target="_blank"
					rel="noopener noreferrer"
					className="footer__link"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://www.frontendmentor.io/profile/sahand-masoleh/"
					target="_blank"
					rel="noopener noreferrer"
					className="footer__link"
				>
					Sahand Masoleh
				</a>
				.
			</footer>
		</div>
	);
}

export default App;

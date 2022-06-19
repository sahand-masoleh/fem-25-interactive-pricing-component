import "../styles/Container.scss";

import Card from "./Card";

function Container() {
	return (
		<main className="container">
			<section className="title">
				<h1 className="title__main">Simple, traffic-based pricing</h1>
				<p className="title__sub">Sign-up for our 30-day trial.</p>
				<p className="title__sub">No credit card required.</p>
			</section>
			<Card />
		</main>
	);
}

export default Container;

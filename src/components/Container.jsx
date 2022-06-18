import Card from "./Card";

function Container() {
	return (
		<div className="main">
			<section className="title">
				<h1 className="title__main">Simple, traffic-based pricing</h1>
				<p className="title__sub">
					Sign-up for our 30-day trial.
					<br />
					No credit card required.
				</p>
			</section>
			<Card />
		</div>
	);
}

export default Container;

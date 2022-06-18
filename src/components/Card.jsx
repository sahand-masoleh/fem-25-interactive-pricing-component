import Register from "./Register";

function Card() {
	return (
		<section className="card">
			<div className="selection">
				<h2 className="selection__views"></h2>
				<input className="selection__bar" type="range" min="0" max="4" />
				<div className="selection__price price">
					<span className="price__num"></span>
					<span className="price__period"></span>
				</div>
				<div className="selecton__billing billing">
					<span className="billing_period">Monthly Billing</span>
					<input type="checkbox" className="billing__toggle" />
					<span className="billing_period">Yearly Billing</span>
					<span className="billing__discount">-25%</span>
				</div>
			</div>
			<Register />
		</section>
	);
}

export default Card;

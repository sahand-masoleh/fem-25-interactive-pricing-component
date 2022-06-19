import "../styles/Card.scss";
import useFormatter from "../hooks/useFormatter";

import Register from "./Register";

function Card() {
	const [price, percentage, setPrice] = useFormatter(16, 8, 36);
	function handleChange(event) {
		setPrice(event.target.value);
	}

	return (
		<section className="card">
			<div className="card__section selection">
				<h2 className="selection__views">100K PAGEVIEWS</h2>
				<div
					className="selection__bar-container"
					style={{ "--width": percentage }}
				>
					<input
						className="selection__bar"
						type="range"
						min="8"
						max="36"
						onChange={handleChange}
					/>
				</div>
				<div className="selection__price price">
					<span className="price__num">{price}</span>
					<span className="price__period">/ month</span>
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

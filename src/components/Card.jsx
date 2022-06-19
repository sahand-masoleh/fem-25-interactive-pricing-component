import "../styles/Card.scss";
import { useState } from "react";
import useFormatter from "../hooks/useFormatter";

import Bar from "./Bar";
import Price from "./Price";
import Billing from "./Billing";
import CTA from "./CTA";

function Card() {
	const [price, percentage, setPrice] = useFormatter(16, 8, 36);
	function handleChange(event) {
		setPrice(event.target.value);
	}

	const [hasDiscount, setHasDiscount] = useState(false);
	function handleDiscount() {
		setHasDiscount((hasDiscount) => !hasDiscount);
	}

	return (
		<section className="card">
			<div className="card__section selection">
				<h2 className="selection__views">100K PAGEVIEWS</h2>
				<Bar handleChange={handleChange} percentage={percentage} />
				<Price price={price} />
				<Billing handleDiscount={handleDiscount} hasDiscount={hasDiscount} />
			</div>
			<CTA />
		</section>
	);
}

export default Card;

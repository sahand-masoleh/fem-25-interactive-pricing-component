import "../styles/Card.scss";
import { useEffect, useState } from "react";
import useFormatter from "../hooks/useFormatter";

import Bar from "./Bar";
import Price from "./Price";
import Billing from "./Billing";
import CTA from "./CTA";

const prices = [
	[8, "10K"],
	[12, "50K"],
	[16, "100K"],
	[24, "500k"],
	[36, "1M"],
];

function Card() {
	const [level, setLevel] = useState(2);
	const [hasDiscount, setHasDiscount] = useState(false);
	const [price, setPrice] = useFormatter(prices[level][0]);

	useEffect(() => {
		updatePrice();
	}, [level, hasDiscount]);

	function handleChange(event) {
		setLevel(event.target.value);
	}

	function handleDiscount() {
		setHasDiscount((hasDiscount) => !hasDiscount);
	}

	function updatePrice() {
		setPrice(prices[level][0] * (hasDiscount ? 0.75 : 1));
	}

	return (
		<section className="card">
			<div className="card__section selection">
				<h2 className="selection__views">{prices[level][1]} PAGEVIEWS</h2>
				<Bar
					handleChange={handleChange}
					level={level}
					max={prices.length - 1}
				/>
				<Price price={price} />
				<Billing handleDiscount={handleDiscount} hasDiscount={hasDiscount} />
			</div>
			<CTA />
		</section>
	);
}

export default Card;

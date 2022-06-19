import "../styles/Price.scss";

function Price({ price }) {
	return (
		<div className="selection__price price">
			<span className="price__num">{price}</span>
			<span className="price__period">/ month</span>
		</div>
	);
}

export default Price;

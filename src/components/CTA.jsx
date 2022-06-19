import "../styles/CTA.scss";

function CTA() {
	return (
		<div className="card__section cta">
			<ul className="cta__list list">
				<li className="list__item">Unlimited websites</li>
				<li className="list__item">100% data ownership</li>
				<li className="list__item">Email reports</li>
			</ul>
			<button className="cta__button">Start my trial</button>
		</div>
	);
}

export default CTA;

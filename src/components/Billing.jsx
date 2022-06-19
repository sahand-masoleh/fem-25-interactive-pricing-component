import "../styles/Billing.scss";
import Toggle from "./Toggle";

function Billing({ handleDiscount, hasDiscount }) {
	return (
		<div className="selection__billing billing">
			<span className="billing__period">Monthly Billing</span>
			<Toggle handleDiscount={handleDiscount} hasDiscount={hasDiscount} />
			<span className="billing__period">Yearly Billing</span>
			<span className="billing__discount">
				-25% <span className="billing__discount-text">discount</span>
			</span>
		</div>
	);
}

export default Billing;

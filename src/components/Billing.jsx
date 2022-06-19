import "../styles/Billing.scss";
import Toggle from "./Toggle";

function Billing({ handleDiscount, hasDiscount }) {
	return (
		<div className="selecton__billing billing">
			<span className="billing__period">Monthly Billing</span>
			<Toggle handleDiscount={handleDiscount} hasDiscount={hasDiscount} />
			<span className="billing__period">Yearly Billing</span>
			<span className="billing__discount">-25%</span>
		</div>
	);
}

export default Billing;

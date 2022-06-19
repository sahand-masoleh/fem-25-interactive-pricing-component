import "../styles/Toggle.scss";

function Toggle({ handleDiscount, hasDiscount }) {
	return (
		<label
			className={`billing__toggle toggle ${
				hasDiscount ? "toggle--active" : "toggle--inactive"
			}`}
		>
			<input
				type="checkbox"
				className="toggle__input-org"
				onChange={handleDiscount}
			/>
			<div className="toggle__input-new"></div>
		</label>
	);
}

export default Toggle;

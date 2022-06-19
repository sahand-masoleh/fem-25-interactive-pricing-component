import "../styles/Bar.scss";

function Bar({ handleChange, percentage }) {
	return (
		<div className="selection__bar bar" style={{ "--width": percentage }}>
			<input
				className="bar__input"
				type="range"
				min="8"
				max="36"
				onChange={handleChange}
			/>
		</div>
	);
}

export default Bar;

import "../styles/Bar.scss";

function Bar({ handleChange, level, max }) {
	return (
		<div className="selection__bar bar" style={{ "--width": level / max }}>
			<input
				className="bar__input"
				type="range"
				max={max}
				value={level}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Bar;

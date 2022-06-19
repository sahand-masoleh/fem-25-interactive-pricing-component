import { useEffect, useState } from "react";

function useFormatter(initial, min, max) {
	const [num, setNum] = useState(initial);
	const [formattedNum, setFormattedNum] = useState();
	const [percentage, setPercentage] = useState();

	useEffect(() => {
		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 2,
		});
		setFormattedNum(formatter.format(num));
		setPercentage(((num - min) * 1) / (max - min));
	}, [num]);

	return [formattedNum, percentage, setNum];
}

export default useFormatter;

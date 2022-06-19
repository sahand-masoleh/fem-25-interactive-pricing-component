import { useEffect, useState } from "react";

function useFormatter(initial) {
	const [num, setNum] = useState(initial);
	const [formattedNum, setFormattedNum] = useState();

	useEffect(() => {
		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 2,
		});
		setFormattedNum(formatter.format(num));
	}, [num]);

	return [formattedNum, setNum];
}

export default useFormatter;

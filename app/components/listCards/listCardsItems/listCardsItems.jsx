"use client";

import { useEffect, useState } from "react";

export default function ListCardsItems({ el, idx, cartArr, setCartArr }) {
	const [isDisebled, setIsDisebled] = useState(false);

	useEffect(() => {
		setIsDisebled(cartArr.some((el) => el.id === idx));
	}, [cartArr]);

	const handleClick = () => {
		if (isDisebled) {
			setCartArr(cartArr.filter((item) => item.id !== idx));
		} else {
			setCartArr([...cartArr, {title:el, id: idx }]);
			console.log(cartArr);
		}
	};

	return (
		<li className="relative w-[250px] h-[200px] border-solid border-red-500 border-[1px] rounded-xl">
			{el}
			<button
				type="button"
				onClick={handleClick}
				className={`absolute bottom-4 right-4 last:border-solid border-[1px] rounded-xl border-blue-900 p-[5px] hover:bg-blue-400 hover:text-red-700 w-[110px] ${
					isDisebled ? "bg-red-500 text-white" : ""
				}`}
			>
				{!isDisebled ? "Add cart" : "Remove cart"}
			</button>
		</li>
	);
}

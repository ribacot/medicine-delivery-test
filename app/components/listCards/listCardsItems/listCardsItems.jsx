"use client";

import { useEffect, useState } from "react";

export default function ListCardsItems({ el,  cartArr, setCartArr }) {
	const [isDisebled, setIsDisebled] = useState(false);

	useEffect(() => {
		setIsDisebled(cartArr.some((cartEl) => cartEl.id === el.id));
	}, [cartArr]);

	const handleClick = () => {
		if (isDisebled) {
			setCartArr(cartArr.filter((item) => item.id !== el.id));
		} else {
			setCartArr([...cartArr, {title:el.title, id: el.id}]);
			console.log(cartArr);
		}
	};

	return (
		<li className="relative w-[250px] h-[200px] border-solid border-red-500 border-[1px] rounded-xl">
      {el.title+" "+el.id} 
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

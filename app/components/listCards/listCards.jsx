"use client";

import { useEffect, useState } from "react";
import ListCardsItems from "./listCardsItems/listCardsItems";

export default function ListCards({ cardArr }) {
	const [cartArr, setCartArr] = useState(
		(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cartArr")) : []) ||
			[]
	);
	const card = cardArr?.length ? cardArr : cartArr;

	useEffect(() => {
		localStorage.setItem("cartArr", JSON.stringify(cartArr));
	}, [cartArr]);

	return (
		<ul className="flex w-full flex-wrap gap-2 overflow-y-auto">
			{card.length?card.map((el) => (
				<ListCardsItems
					key={el.id}
					el={el}
					setCartArr={setCartArr}
					cartArr={cartArr}
				/> 
			)):null}
		</ul>
	);
}

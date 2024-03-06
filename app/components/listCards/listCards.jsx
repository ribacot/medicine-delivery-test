"use client";

import { useEffect, useState } from "react";
import ListCardsItems from "./listCardsItems/listCardsItems";

export default function ListCards({ cardArr }) {
	const [cartArr, setCartArr] = useState(
		(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cartArr")) : []) ||
			[]
	);
	const [isClient, setIsClient] = useState(false);
	const card = cardArr?.length ? cardArr : cartArr;
	useEffect(() => {
		
	setIsClient(true)
	}, [])

	useEffect(() => {
		localStorage.setItem("cartArr", JSON.stringify(cartArr));
	}, [cartArr]);

	return (
		<ul className="flex w-full flex-wrap gap-2 overflow-y-auto">
			{isClient?card.map((el) => (
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

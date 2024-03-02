import ListCardsItems from "./listCardsItems/listCardsItems";

export default function ListCards() {
	const caardItems = Array(10).fill("example");
	return (
		<ul className="flex w-full flex-wrap gap-2 overflow-y-auto">
			{caardItems.map((el, idx) => (
				<li key={idx}>
					<ListCardsItems title={el} idx={idx}/>
				</li>
			))}
		</ul>
	);
}

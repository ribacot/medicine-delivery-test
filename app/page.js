import Aside from "./components/asideBar/aside";
import { Container } from "./components/ui/container/container";
import ListCards from "./components/listCards/listCards";
import { El_Messiri } from "next/font/google";

export default function Home() {
	const cardItems = Array(10).fill({title:"example"}).map((el,idx)=>{return {...el,id:(idx+1).toString()}});
console.log(cardItems)

	return (
		<main className="">
			<Container className="flex gap-3">
				<Aside />
        <ListCards cardArr={cardItems}/>
			</Container>
		</main>
	);
}

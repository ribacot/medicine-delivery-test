import Aside from "./components/asideBar/aside";
import { Container } from "./components/ui/container/container";
import ListCards from "./components/listCards/listCards";

export default function Home() {
	const cardItems = Array(10).fill("example");


	return (
		<main className="">
			<Container className="flex gap-3">
				<Aside />
        <ListCards cardArr={cardItems}/>
			</Container>
		</main>
	);
}

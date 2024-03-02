// import Image from "next/image";
import Aside from "./components/asideBar/aside";
import { Container } from "./components/ui/container/container";
import ListCards from "./components/listCards/listCards";

export default function Home() {
	return (
		<main className="">
			<Container className="flex gap-3">
				<Aside />
        <ListCards/>
			</Container>
		</main>
	);
}

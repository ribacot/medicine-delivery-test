import ListCards from "../components/listCards/listCards";
import { Container } from "../components/ui/container/container";

export default function shoppingCcards() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Container>
				<ListCards />
			</Container>
		</main>
	);
}

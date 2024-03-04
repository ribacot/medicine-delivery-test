import Form from "../components/form/form";
import ListCards from "../components/listCards/listCards";
import { Container } from "../components/ui/container/container";

export default function shoppingCcards() {
	return (
		<>
			<Container  className="flex gap-3">
				<Form/>
				<ListCards />
			</Container>
		</>
	);
}

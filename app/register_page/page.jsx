import Image from "next/image";
import { Container } from "../components/ui/container/container";

export default function (second) {
	return (
		<section className="mt-8">
			<Container className="text-center">
				<h1 className="auth">Register</h1>
				<form className="flex flex-col gap-4 mt-7 max-w-sm mx-auto">
					<input id="email" type="email" placeholder="email" className="formAuth" />
					<input
						id="password"
						type="password"
						placeholder="password"
						className="formAuth"
					/>
					<button
						type="submit"
						className=" bg-red-500 rounded-xl text-white font-semibold py-2 hover:bg-red-700
                    "
					>
						Register
					</button>
					<p className=" text-centr"> or login with provider</p>
					<button className="flex items-center justify-center gap-2 border-solid border-gray-300 border-[1px] rounded-xl py-1 font-semibold hover:border-blue-300">
						<Image src={"/googleIkon.png"} alt={"google ikon"} width={32} height={32} />{" "}
						Login with Google
					</button>
				</form>
			</Container>
		</section>
	);
}

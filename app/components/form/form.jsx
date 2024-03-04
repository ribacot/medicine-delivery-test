"use client"
import { useForm } from "react-hook-form";

// import Button from "../Ui/Button";

import Input from "./input";

const nameInput = {
	id: "name",
	placeholder: "Enter the name",
	label: "Name",
};

const priceSelectObj = {
	id: "price",
	placeholder: "To $",
	label: "Price/ 1 hour",
};

const stopWord = "Select all";

export default function Form() {
	const initialForm = {
		name: "",
		email: "",
		phone: "",
		adress: "",
	};
	const { register, handleSubmit, reset } = useForm({
		mode: "onChenge",
		values: initialForm,
	});

	const onSubmit = (data) => {
		const { name, email, phone, adress } = data;

		reset();
	};

	return (
		<div className="flex justify-center pb-[30px]">
			<form
				action="submit"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				autoComplete="off"
				className="flex flex-col gap-[18px] w-[400px] px-[20px]"
			>
				<Input
					register={register}
					label="Name"
					id="name"
					placeholder="Enter the name"
					classStyle="rounded-[10px] border-[1px]"
				/>
				<Input
					register={register}
					label="Email"
					id="email"
					placeholder="Enter the email"
					classStyle="rounded-[10px] border-[1px]"
				/>
				<Input
					register={register}
					label="Adress"
					id="adress"
					placeholder="Enter the adress"
					classStyle="rounded-[10px] border-[1px]"
				/>
				<Input
					register={register}
					label="Phone"
					id="phone"
					placeholder="Enter the phone"
					classStyle="rounded-[10px] border-[1px]"
				/>
				<button type="submit" className="bg-green-200 text-red-500 rounded-xl" >
					Submit
				</button>
			</form>
		</div>
	);
}

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
		// if (!model & !price & !mileadgFrom & !mileadgTo) {
		// 	return;
		// }

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
					className="rounded-[10px] border-[1px]"
				/>
				<Input
					register={register}
					label="Email"
					id="email"
					placeholder="Enter the email"
					className="rounded-[10px] border-[1px]"
				/>
				<Input
					register={register}
					label="Adress"
					id="adress"
					placeholder="Enter the adress"
					className="rounded-[10px] border-[1px]"
				/>
				<Input
					register={register}
					label="Phone"
					id="phone"
					placeholder="Enter the phone"
					className="rounded-[10px] border-[1px]"
				/>
				<button type="submit" clasName="w-fit px-[44px] py-[10px] ">
					Submit
				</button>
			</form>
		</div>
	);
}

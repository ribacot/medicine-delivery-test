"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import css from "./form.module.css";
import close from "@/app/img/openmoji_close.svg";
import Image from "next/image";

export default function Form({ isActive }) {
	const [isDisabled, setIsDisabled] = useState(isActive ?? false);
	const initialForm = {
		name: "",
		mail: "",
		position: "",
		phone: "",
		massege: "",
	};
	const {
		register,
		handleSubmit,
		formState,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		values: initialForm,
	});

	const onSubmit = (data) => {
		const { name, mail, massege } = data;
		if (!isActive) {
			console.log({ name, mail, massege });
		} else {
			console.log("hello", { ...data, phone: "+38" + data.phone });
		}
		reset();
		setIsDisabled(false);
	};

	const hendleValid = () => {
		setIsDisabled(!isDisabled);
	};

	return (
		<form
			action="submit"
			onSubmit={handleSubmit(onSubmit)}
			className={css.form}
			noValidate
			autoComplete="off"
		>
			<div
				className={
					isActive
						? css.wrapperFormBody
						: `${css.wrapperFormBody} ${css.wrapperFormBodyFooter}`
				}
			>
				<div
					className={
						isActive
							? css.wrapperInputs
							: `${css.wrapperInputs} ${css.wrapperInputsFooter}`
					}
				>
					<div>
						<label htmlFor="name" className={errors?.name && css.notCorrect}>
							Full name
						</label>
						<div className={css.wrapperInput}>
							<input
								className={errors?.name && css.notCorrect}
								type="text"
								placeholder="John Smith"
								{...register("name", {
									required: "required",
									pattern: {
										value: /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
										message: "Incorrect name",
									},
								})}
								id="name"
							/>
							{errors?.name && (
								<div className={css.error}>
									<Image src={close} alt="close" />
									{errors.name.message}
								</div>
							)}
						</div>
					</div>
					<div>
						<label htmlFor="mail" className={errors?.mail && css.notCorrect}>
							E-mail
						</label>
						<div className={css.wrapperInput}>
							<input
								className={errors?.mail && css.notCorrect}
								type="mail"
								placeholder="johnsmith@email.com"
								{...register("mail", {
									required: "required",
									pattern: {
										value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
										message: "Invalid e-mail",
									},
								})}
								id="mail"
							/>
							{errors?.mail && (
								<div className={css.error}>
									<Image src={close} alt="close" />
									{errors.mail.message}
								</div>
							)}
						</div>
					</div>
					{isActive && (
						<>
							<div className={css.wrapperInput}>
								<label htmlFor="position" className={errors?.position && css.notCorrect}>
									Position
								</label>
								<input
									className={errors?.position && css.notCorrect}
									type="text"
									{...register("position", {
										pattern: {
											value:
												/^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
											message: "Incorrect position",
										},
									})}
									id="position"
									placeholder="Movie maker"
								/>
								{errors?.position && (
									<div className={css.error}>
										<Image src={close} alt="close" />
										{errors.position.message}
									</div>
								)}
							</div>
							<div>
								<label htmlFor="phone" className={errors?.phone && css.notCorrect}>
									Phone
								</label>
								<div className={css.wrapperInput}>
									<input
										className={`${
											errors?.phone ? `${css.notCorrect} ${css.phone}` : css.phone
										}`}
										type="tel"
										placeholder="(097) 12 34 567"
										{...register("phone", {
											required: { value: true, message: "required" },
											maxLength: {
												value: 10,
												message: "Incorrect phone",
											},
											minLength: {
												value: 10,
												message: "Incorrect phone",
											},
											pattern: {
												value: /(0)\d{9}$/,
												// value: / ^\0\d{7}$ /,
												// value: /[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/,
												// /Корректнее будет pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" т.к. код Украины +380, а не +38./
												message: "first digit 0",
											},
										})}
										id="phone"
									/>
									{errors?.phone && (
										<div className={css.error}>
											<Image src={close} alt="close" />
											{errors.phone.message}
										</div>
									)}
									{errors?.phone && console.log(errors.phone.message)}
									<span className={css.startPhone}>+ 38</span>
								</div>
							</div>
						</>
					)}
				</div>
				<div className={isActive ? css.message : css.messageFooter}>
					<label htmlFor="massege">Message</label>
					<textarea
						className={!isActive ? css.textareaFooter : null}
						{...register("massege")}
						id="massege"
					></textarea>
				</div>
			</div>
			<div className={` ${css.wrapperConfirm} ${!isActive ? css.footerStyle : null} `}>
				{isActive && (
					<>
						<label className={css.checkbox}>
							<input
								className={css.notVisibil}
								type="checkbox"
								name="valid"
								disabled={!formState.isValid}
								onClick={hendleValid}
							/>
							<div
								className={`${css.checkboxOut} ${
									!formState.isValid && css.notActiveConfirm
								}`}
							>
								<div
									className={`${css.checkboxIn} ${
										!formState.isValid || isDisabled ? css.notValid : css.valid
									}`}
								></div>
							</div>
							<span
								className={`${css.confirmText} ${
									!formState.isValid && css.notActiveConfirm
								}`}
							>
								I confirm my consent to the processing of personal data.
							</span>
						</label>
					</>
				)}
				<button
					type="submit"
					disabled={!formState.isValid || isDisabled}
					className={css.btnSend}
				>
					Send
				</button>
			</div>
		</form>
	);
}

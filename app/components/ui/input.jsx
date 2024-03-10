import "../form/form.css";

export default function Input({
	register,
	id = "",
	placeholder = "",
	label = "",
	type = "text",
	classStyle="",
}) {
	return (
		<div >
			{label ? (
				<label htmlFor={id} className="lebleText mb-[8px]">
					{label}
				</label>
			) : null}
			<div className="relative">
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(id)}
					className={`w-[100%] h-[48px] pl-[18px] bg-input placeholder:text-darck  outline-darkBlue outline-[2px] bprder-[#8A8A8933] ${classStyle}`}
				/>
			</div>
		</div>
	);
}

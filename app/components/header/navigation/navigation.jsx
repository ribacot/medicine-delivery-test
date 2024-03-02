export default function Navigation({links,className}) {
	return (
		<div className={`${className} `}>
			{links.map(({name,href}) => (
				<a
					key={name}
					href={href}
					className="text-sm font-semibold leading-6"
				>
					{name}
				</a>
			))}
		</div>
	);
}

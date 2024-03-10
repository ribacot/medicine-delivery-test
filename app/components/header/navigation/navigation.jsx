import Link from "next/link";

export default function Navigation({ links, className, onClick = null }) {
	return (
		<ul className={`${className} `}>
			{links.map(({ name, href }) => (
				<li key={name}>
					<Link
						href={href}
						onClick={() => onClick(false)}
						className="text-sm font-semibold leading-6"
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	);
}

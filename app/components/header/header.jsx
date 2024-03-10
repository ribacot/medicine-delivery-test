"use client";
import { useState } from "react";
import Navigation from "./navigation/navigation";
import MobileMenu from "./mobileMenu/mobileMenu";
import { Container } from "../ui/container/container";
import Link from "next/link";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react@heroicons/react/24/outline'

const navigationLinks = [
	{ name: "Shops", href: "/" },
	{ name: "Shopping cart", href: "/shopping-cart" },
	{ name: "LogIn", href: "/login_page" },
	{ name: "Register", href: "/register_page" },

];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="py-[20px] ">
			<Container>
				<nav className="flex items-center justify-between" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							Logo
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={()=>setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>X
						</button>
					</div>
					<Navigation links={navigationLinks} onClick={()=>setMobileMenuOpen(false)} className="hidden lg:flex lg:gap-x-12" />
				</nav>
			</Container>

			<MobileMenu
				onClick={setMobileMenuOpen}
				isOpen={mobileMenuOpen}
				links={navigationLinks}
			/>
		</header>
	);
}

import { FaShoppingCart } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full h-16 bg-bblack text-beige z-50 flex justify-between">
			<div className="lg:hidden w-full flex justify-between items-center pr-4">
				<LogoMobile />
				<h1 className="uppercase text-6xl">
					ergot
					<span>
						<CiMenuKebab />
					</span>
				</h1>
			</div>
			<div className="hidden w-2/5 h-full md:hidden lg:flex justify-end items-end space-x-8 ">
				<Link href="/">
					<p className="hover:text-purple text-3xl text-extrabold custom_font uppercase">
						home
					</p>
				</Link>
				<Link href="/shop">
					<p className="hover:text-purple text-3xl text-extrabold custom_font uppercase ">
						shop
					</p>
				</Link>
			</div>
			<div className="hidden lg:w-1/5 h-full lg:flex justify-center items-center">
				<Logo />
			</div>
			<div className="hidden w-2/5 h-full md:hidden lg:flex justify-between">
				<div className="flex items-end space-x-8">
					<Link href="/about">
						<p className="hover:text-purple text-3xl text-extrabold custom_font uppercase ">
							about
						</p>
					</Link>
					<Link href="/contact">
						<p className="hover:text-purple text-3xl text-extrabold custom_font uppercase ">
							contact
						</p>
					</Link>
				</div>

				<div className="flex items-end pr-8 pb-1">
					<p className="text-3xl text-extrabold custom_font uppercase ">
						<FaShoppingCart />
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

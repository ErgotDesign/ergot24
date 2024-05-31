"use client";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<nav className=" w-full h-16 bg-bblack text-beige flex justify-between">
			<div className="lg:hidden w-full flex justify-between items-center pr-4">
				<LogoMobile />
				<h1 className="uppercase text-6xl">
					ergot
					<span>
						<CiMenuKebab />
					</span>
				</h1>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -20 }} // Start from transparent and 20px below
				animate={{ opacity: 1, y: 0 }} // Animate to fully visible and correct position
				transition={{ duration: 1, ease: "easeOut" }}
				className="hidden w-2/5 h-full md:hidden lg:flex justify-end items-end space-x-8 "
			>
				<Link href="/">
					<p className="hover:text-purple text-3xl font-bold custom_font uppercase">
						home
					</p>
				</Link>
				<Link href="/shop">
					<p className="hover:text-purple text-3xl font-bold custom_font uppercase ">
						shop
					</p>
				</Link>
			</motion.div>
			<div className="hidden lg:w-1/5 h-full lg:flex justify-center items-center">
				<Logo />
			</div>
			<motion.div
				initial={{ opacity: 0, y: -20 }} // Start from transparent and 20px below
				animate={{ opacity: 1, y: 0 }} // Animate to fully visible and correct position
				transition={{ duration: 1, ease: "easeOut" }}
				className="hidden w-2/5 h-full md:hidden lg:flex justify-between"
			>
				<div className="flex items-end space-x-8">
					<Link href="/about">
						<p className="hover:text-purple text-3xl font-bold custom_font uppercase ">
							about
						</p>
					</Link>
					<Link href="/contact">
						<p className="hover:text-purple text-3xl font-bold custom_font uppercase ">
							contact
						</p>
					</Link>
				</div>

				<div className="flex items-end pr-8 pb-1">
					<p className="text-3xl font-bold custom_font uppercase ">
						<FaShoppingCart />
					</p>
				</div>
			</motion.div>
		</nav>
	);
};

export default Navbar;

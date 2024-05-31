"use client";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
	return (
		<footer className="w-full h-full bg-beige text-purple px-8">
			<div className="mx-auto w-full flex items-center">
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="w-1/2 flex items-center"
				>
					<h1 className="uppercase text-3xl">ergot</h1>
					<h3 className="font-bacalisties font-extrabold normal-case text-lg pt-3">
						© by Incepted.dev
					</h3>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="w-1/2 flex items-center justify-end space-x-6 "
				>
					<a
						href="https://www.facebook.com/ergot.de"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<FaFacebook size={24} />
					</a>
					<a
						href="https://instagram.com/ergot_official"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<FaInstagram size={24} />
					</a>
					<a
						href="https://tiktok.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="TikTok"
					>
						<FaTiktok size={24} />
					</a>
				</motion.div>
			</div>
		</footer>
	);
}

export default Footer;

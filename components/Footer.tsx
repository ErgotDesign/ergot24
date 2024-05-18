import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
	return (
		<footer className="w-full bg-beige text-purple py-2 px-8">
			<div className="mx-auto w-full flex">
				<div className="w-1/2">
					<h1 className="uppercase text-xl">
						ergot <span className="text-sm">© 2024</span>
						<span className="font-bacalisties font-extrabold normal-case text-lg">
							{" "}
							by Incepted.dev
						</span>
					</h1>
				</div>
				<div className="w-1/2 flex items-center justify-end space-x-6 ">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<FaFacebook size={24} />
					</a>
					<a
						href="https://instagram.com"
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
				</div>
			</div>
		</footer>
	);
}

export default Footer;

// src/components/Logo.jsx

import Image from "next/image";
import logo from "../public/Logo.png";

function Logo() {
	return (
		<div className="relative w-32 2xl:w-40 mt-16 z-50">
			<Image
				src={logo}
				alt="Circle"
				className="hidden lg:flex rounded-full w-full h-full object-cover"
			/>

			<div className="absolute inset-0 w-full h-full rounded-full b"></div>
		</div>
	);
}

export default Logo;

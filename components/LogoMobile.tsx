import Image from "next/image";
import logo from "../public/log.png";

function LogoMobile() {
	return (
		<div className="relative w-40 mt-20 z-50 -ml-2">
			<Image
				src={logo}
				alt="Circle"
				className="lg:hidden rounded-full w-full h-full object-cover"
			/>
			<div className="absolute inset-0 w-full h-full rounded-full b"></div>
		</div>
	);
}

export default LogoMobile;

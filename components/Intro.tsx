import Image from "next/image";
import Link from "next/link";
import React from "react";

const Intro = () => {
	return (
		<div className="w-full h-full bg-black/50 flex items-center justify-center flex-grow overflow-auto hide-scrollbar">
			<Link href="/home">
				<Image src="/log.png" alt="logo" width="600" height="600" />
			</Link>
		</div>
	);
};

export default Intro;

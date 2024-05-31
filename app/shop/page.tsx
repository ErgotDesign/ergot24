import Image from "next/image";
import model from "@/public/img/clown.jpg";
const page = () => {
	return (
		<div className="w-full h-full bg-beige flex justify-center items-end overflow-hidden">
			<div className="w-2/3 h-[30rem] flex flex-coljustify-end items-end ">
				<Image
					src={model}
					alt="shoes"
					className="w-full object-none rounded-l-full border-bblack border-b-8"
				></Image>
				<h1 className="text-6xl font-extrabold">shop</h1>
			</div>
			<div className="w-1/3 h-full bg-purple flex justify-center items-center border-bblack border-b-8">
				<h1 className="uppercase text-bblack text-extrabold text-center text-8xl animate-pulse -rotate-3 pl-4">
					coming soon
				</h1>
			</div>
		</div>
	);
};

export default page;

import Image from "next/image";
import model from "@/public/img/clown.jpg";
const page = () => {
	return (
		<div className="w-full lg:h-[720px] bg-beige flex justify-center items-end overflow-hidden">
			<div className="w-1/3 h-[40rem] bg-purple flex justify-center items-center">
				<h1 className="uppercase text-bblack font-extrabold text-center text-8xl -rotate-3 pl-4">
					about
				</h1>
			</div>
			<div className="w-2/3 h-[40rem] flex flex-col justify-end items-end ">
				<div className="w-full h-full  grid grid-cols-7 grid-rows-5 gap-4 bg-bblack border-purple border-b-8 rounded-br-full">
					{" "}
					<div className="col-span-3 col-start-2 row-start-2  ">
						<h1 className="uppercase text-beige text-extrabold text-justify text-6xl p-2 bg-purple">
							rock'n roll
						</h1>
					</div>
					<div className="col-span-3 col-start-3 row-start-3">
						<h1 className="uppercase text-beige text-extrabold text-justify text-6xl p-2 border-2 border-purple">
							avat-gard
						</h1>
					</div>
					<div className="col-span-3 col-start-4 row-start-4">
						<h1 className="uppercase text-beige text-extrabold text-justify text-6xl bg-purple p-2">
							fashion
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;

// const page = () => {
// 	return (
// 		<div className="w-full lg:h-[720px] bg-beige flex justify-center items-center overflow-hidden">
// 			<div className="w-1/3 flex justify-center items-center">
// 				<h1 className="uppercase text-bblack text-extrabold text-center text-8xl -rotate-3 pl-4">
// 					about
// 				</h1>
// 			</div>
// 			<div className="w-2/3 h-[40rem] mt-24 grid grid-cols-7 grid-rows-5 gap-4 bg-bblack  rounded-l-full">
// 				<div className="ccol-span-3 col-start-2 row-start-2  ">
// 					<h1 className="uppercase text-beige text-extrabold text-justify text-6xl p-2 bg-purple">
// 						rock'n roll
// 					</h1>
// 				</div>
// 				<div className="ccol-span-3 col-start-3 row-start-3">
// 					<h1 className="uppercase text-beige text-extrabold text-justify text-6xl p-2 border-2 border-purple">
// 						avat-gard
// 					</h1>
// 				</div>
// 				<div className="ccol-span-3 col-start-4 row-start-4">
// 					<h1 className="uppercase text-beige text-extrabold text-justify text-6xl bg-purple p-2">
// 						fashion
// 					</h1>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default page;

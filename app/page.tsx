import Carosello from "@/components/Carosello";

export default function Home() {
	return (
		<main className="w-full h-full flex items-center justify-center bg-beige">
			<Carosello />
		</main>
		// <main className="w-full ma bg-beige flex flex-col items-center ">
		// 	<div className="w-full h-full flex items-center justify-center flex-grow overflow-auto hide-scrollbar">
		// 		<Carosello />
		// 	</div>
		// </main>
	);
}

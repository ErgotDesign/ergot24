import Carosello from "@/components/Carosello";

export default function Home() {
	return (
		<main className="w-full bg-beige flex flex-col items-center ">
			<div className="w-full h-full flex items-center justify-center flex-grow overflow-auto hide-scrollbar">
				<Carosello />
			</div>
		</main>
	);
}

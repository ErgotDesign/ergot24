import Carosello from "./Carosello";

export default function Home() {
	return (
		<main className="w-full bg-beige flex flex-col items-center ">
			<hr className="w-full border-t-4 border-black my-4 z-0" />
			<div className="w-full h-full flex items-center justify-center flex-grow overflow-auto hide-scrollbar">
				<Carosello />
			</div>
		</main>
	);
}

"use client";
import { useState, useEffect } from "react";
import image1 from "@/public/carosello/1.jpg";
import image2 from "@/public/carosello/2.jpg";
import image3 from "@/public/carosello/3.jpg";
import image4 from "@/public/carosello/4.jpg";
import image5 from "@/public/carosello/5.jpg";
import image6 from "@/public/carosello/6.jpg";
import Image from "next/image";

function Carosello() {
	const images = [image1, image2, image3, image4, image5, image6];
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [images.length]);

	return (
		<div className="relative w-full max-h-[720px] bg-beige mx-auto  overflow-hidden rounded-full border-8  border-black">
			{images.map((image, index) => (
				<Image
					key={index + 1}
					src={image}
					alt={`Slide ${index}`}
					className="w-full h-full transition-shadow"
					style={{
						display: currentIndex === index ? "block" : "none",
					}}
				/>
			))}
		</div>
	);
}

export default Carosello;

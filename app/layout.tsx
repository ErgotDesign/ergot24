import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
	src: "./Quakiez.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "ERGOT - HOME",
	description: "Fashion",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={myFont.className}>
				<div className="w-screen h-screen max-h-screen grid-custom">
					<div className="bg-purple">
						<Navbar />
					</div>

					<div className="flex-grow bg-black">{children}</div>

					<footer className="bg-beige flex items-center justify-center">
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}

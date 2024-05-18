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
				<div className="w-screen h-screen min-h-screen overflow-auto hide-scrollbar">
					<Navbar />

					{children}
					<footer>
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}

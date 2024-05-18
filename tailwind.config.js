/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				beige: "#d9cebd",
				purple: "#745C97",
				grey: "#F3EEEA",
				bblack: "#151515",
			},
			fontFamily: {
				bacalisties: ["Bacalisties"],
			},
		},
	},
	plugins: [],
};

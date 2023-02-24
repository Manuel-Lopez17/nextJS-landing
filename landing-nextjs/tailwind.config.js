/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors:{
				"darkgrey-50":"#f4f4f4",
				"darkgrey-100":"#DEDEDE",
				"darkgrey-200":"#CDCDCD",
				"darkgrey-300":"#B7B7B7",
				"darkgrey-400":"#A9A9A9",
				"darkgrey-500":"#939393",
				"darkgrey-600":"#868686",
				"darkgrey-700":"#686868",
				"darkgrey-800":"#515151",
				"darkgrey-900":"#3E3E3E",
				"grey-50":"#F8F8F8",
				"grey-100":"#EAEAEA",
				"grey-200":"#DFDFDF",
				"grey-300":"#D1D1D1",
				"grey-400":"#C8C8C8",
				"grey-500":"#BABABA",
				"grey-600":"#A9A9A9",
				"grey-700":"#848484",
				"grey-800":"#666666",
				"grey-900":"#4E4E4E",
				"blue-50":"#E7EEFC",
				"blue-100":"#B6CCF7",
				"blue-200":"#92B3F3",
				"blue-300":"#6190EE",
				"blue-400":"#427AEA",
				"blue-500":"#1359E5",
				"blue-600":"#1151D0",
				"blue-700":"#0D3FA3",
				"blue-800":"#0A317E",
				"blue-900":"#082560",
			}
		},
	},
	plugins: [],
};


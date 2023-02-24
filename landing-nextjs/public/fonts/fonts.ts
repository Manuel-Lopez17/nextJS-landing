import { Roboto } from "@next/font/google";

export const roboto = Roboto({
	weight: ["400", "700"],
	style: ["italic", "normal"],
	subsets: ["latin"],
	fallback: ["system-ui"],
	variable: "--roboto",
});

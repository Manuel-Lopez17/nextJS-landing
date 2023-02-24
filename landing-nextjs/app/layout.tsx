import "./globals.scss";
import React from "react";
import "./tailwind-global.scss";
import { Navbar } from "../components/navbar";
import appClass from "./page.module.scss";
import { roboto } from "../public/fonts";

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={` bg-gradient-to-br from-gray-100 to-gray-100  ${appClass.layout} ${roboto.className}`}>
				<Navbar/>
				<div className={appClass.main}>
					{children}
				</div>
			</body>
		</html>
	);
}

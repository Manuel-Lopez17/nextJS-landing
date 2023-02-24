import React from "react";
import {HomeRoute,AboutRoute } from "../../models";
import navbarClass from "./navbar.module.scss";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	const homeRoute = HomeRoute;
	const aboutRoute = AboutRoute;

	return (
		<div className={navbarClass.navBar}>
			<div className={navbarClass.container}>
				<NavbarItem name={"Home"} routes={homeRoute}/>
				<NavbarItem name={"About"} routes={aboutRoute}/>	
			</div>
		</div>
	);
};

export default Navbar;
import Link from "next/link";
import React from "react";
import { Route } from "../../models";
import navbarItem from "./navbarItem.module.scss";

interface Props{
    name:string;
    routes:Route[]   
}



const NavbarItem = ({name,routes }:Props) => {
	return (
		<>
			{routes.length == 1? 
				routes.map((route:Route)=>
					<Link key={route.path} href={route.path} className={`${navbarItem.link}`}>{route.pathName}
						<div className={navbarItem.underline}></div>
					</Link>
				):
				<div className={`${navbarItem.link}`}>
					{name}        
					<div className={navbarItem.underline}></div>
					<div className={navbarItem.dropdown}>
						{
							routes.map((route:Route)=>
								<Link key={route.path} href={route.path} className={navbarItem.item} >{route.pathName}
								</Link>						
							)
						}

					</div>
				</div>
			}
		</>
	);
};

export default NavbarItem;
export const Routes = {
	HOME: {
		path: "/",
		pathName: "Home",
	},
	ABOUT: {
		path: "/about",
		pathName: "About",
	},
};

export const HomeRoute = [{ path: "/", pathName: "Home" }];
export const AboutRoute = [
	{
		path: "/about",
		pathName: "About",
	},
];

export interface Route {
	path: string;
	pathName: string;
}

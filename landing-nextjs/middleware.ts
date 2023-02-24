import { NextRequest, NextResponse } from "next/server";

export function middlewere(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("nextjs-token", "TEST");

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});

	//REDIRECT CASE

	// if (request.nextUrl.pathname.endsWith("/about")) {
	// // 	console.log("Redirect");
	// 	return NextResponse.redirect(new URL("/about", request.url));
	// }
	//REWRITE
	// if (request.nextUrl.pathname.endsWith("/about")) {
	// 	return NextResponse.rewrite(new URL("/about", request.url));
	// }

	//REDIRECT WITH CONDITION
	// if (request.nextUrl.pathname.startsWith("/about")) {
	// 	const user = {
	// 		name: "Manu",
	// 		authenticated: false,
	// 	};
	// 	if (user.authenticated) {
	// 		return NextResponse.redirect(new URL("/login", request.url));
	// 	}
	// }

	return response;
}

//En que rutas se agrega el middlewere
export const config = {
	matcher: ["/information/:path*"],
};

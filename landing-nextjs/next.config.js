/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode:true,
	swcMinify:true,
	skipTrailingSlashRedirect:true,
	skipMiddlewareUrlNormalize:true,
	experimental: {
		appDir: true,
	},
	images:{
		remotePatterns:[]
	}
};

module.exports = nextConfig;

// export default nextConfig;

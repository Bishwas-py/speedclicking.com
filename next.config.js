/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [{
            source: "/:side/:time-seconds-test",
            destination: "/seconds-test/:time?side=:side",
        }];
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
}

module.exports = nextConfig

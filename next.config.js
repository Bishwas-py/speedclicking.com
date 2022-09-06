/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/double-click",
                destination: "/seconds-test/10?side=double",
            },
            {
                source: "/right-click",
                destination: "/seconds-test/10?side=right",
            },
            {
                source: "/left-click",
                destination: "/seconds-test/10?side=left",
            },
            {
                source: "/:side/:time-seconds-test",
                destination: "/seconds-test/:time?side=:side",
            },
        ];
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    }
}

module.exports = nextConfig

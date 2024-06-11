/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    experimental: {
        optimizePackageImports: [
            '@apollo/client',
            '@apollo/experimental-nextjs-app-support',
            '@apollo/persisted-query-lists',
            'apollo3-cache-persist',
            'graphql',
            'graphql-ws',
            '@noble/hashes',
            'uint8arrays',
            'ts-pattern',
            '@mobily/ts-belt',
            'framer-motion',
            'lucide-react',
            "mutative",
            "use-mutative",
            "zod",
            "recharts"
        ]
    }
};

export default nextConfig;

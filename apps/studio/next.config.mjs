/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@forge/shared',
    '@forge/fir',
    '@forge/compiler',
    '@forge/graph',
    '@forge/workflow',
    '@forge/auth',
    '@forge/database',
    '@forge/telemetry',
    '@forge/ui',
  ],
  serverExternalPackages: ['drizzle-orm', 'postgres'],
};

export default nextConfig;

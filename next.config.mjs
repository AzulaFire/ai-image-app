/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai-studio-assets.limewire.media',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.limewire.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

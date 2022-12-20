const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev',
        permanent: true,
      }
    ]
  },
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        port: '',
      }
    ]
  }
};

module.exports = nextConfig;

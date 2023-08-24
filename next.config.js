module.exports = {
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
      removeConsole: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.travelxp.com'
  
        },
      ],
      deviceSizes: [340, 640, 768, 1024, 1200, 1920],
      formats: ['image/webp'],
    },
    experimental: {
      appDir: true,
    },
    poweredByHeader: false
  }

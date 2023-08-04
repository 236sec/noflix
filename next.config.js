const fs = require('fs');
const dotenv = require('dotenv');

// Check if .env file exists before attempting to read it
if (fs.existsSync('.env')) {
  const env = dotenv.parse(fs.readFileSync('.env'));
  // Use the parsed environment variables in the config
  const nextConfig = {
    reactStrictMode: true,
    env: env,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        }
      ],
    },
  };
  module.exports = nextConfig;
} else {
  // Fallback if .env file doesn't exist
  module.exports = {
    reactStrictMode: true,
    env: {},
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        }
      ],
    },
  };
}

module.exports = {
  apps: [
    {
      name: 'explore',
      cwd: 'packages/explore',
      script: 'yarn dev',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'gateway',
      cwd: 'packages/gateway',
      script: 'yarn dev',
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'service-products',
      cwd: 'packages/service-products',
      script: 'yarn dev',
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};

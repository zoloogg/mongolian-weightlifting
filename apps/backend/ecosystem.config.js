module.exports = {
  apps: [
    {
      name: 'weightlifting-api',
      script: './dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
}

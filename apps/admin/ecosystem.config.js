module.exports = {
  apps: [
    {
      name: 'weightlifting-admin',
      script: 'npm run start',
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
}

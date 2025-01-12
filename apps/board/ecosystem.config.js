module.exports = {
  apps: [
    {
      name: 'weightlifting-board',
      script: 'npm run start',
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
}

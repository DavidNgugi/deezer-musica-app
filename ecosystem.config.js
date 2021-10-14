module.exports = {
  apps: [{
    name: 'deezer-music-app',
    script: 'server/index.js',
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
  }],
};

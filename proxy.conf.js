const PROX_CONFIG = [
  {
    context:['/api'],
    target: 'http://localhost:80/',
    secure: false,
    changeOrigin:true,
    logLevel: 'debug'
  }
];

module.exports = PROX_CONFIG;
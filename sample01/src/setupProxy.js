// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/gocamping', {
      target: "http://localhost:9090",
      changeOrigin: true,
    }),
  );
};
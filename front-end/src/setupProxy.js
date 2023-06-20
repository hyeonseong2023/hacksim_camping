// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/gocamping', {
      target: "http://localhost:8088",
      changeOrigin: true,
    }),
  );
};
// 跨域请求

const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(createProxyMiddleware('/listUserByName', {target: 'http://localhost:8081/crud/', changeOrigin: true}))

}

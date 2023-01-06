// 请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量
let http = require('http')
/**
 * 接下来我们调用 http 模块提供的函数： createServer 。
 * 这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，
 * 这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号
 */
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1.8888/');
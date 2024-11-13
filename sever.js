const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;

  // sử lý backend để lấy data trả về client
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write('<h1>Node - bài 1</h1><br>');
  res.write('<p>Tạo project bằng Node.js-md19304</p>');
  res.write(`  <h1>html:5 - hà nội1</h1>
    <h2>html:5 - hà nội1</h2>
    <h3>html:5 - hà nội1</h3>
    <p>bùi việt</p>`);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

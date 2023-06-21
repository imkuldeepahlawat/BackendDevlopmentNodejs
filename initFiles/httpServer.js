// creating a http server
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("helo from server");
  //   edn the server
  res.writeHead(200,{'Content-Type': 'html'});
  res.write(`<p>Error</p>`)
  res.end();
});

server.listen(3001, () => {
  console.log("Listen on 3001");
});

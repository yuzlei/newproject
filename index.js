const http = require("http");

const server = http.createServer((req, res) => {
  const requrl = req.url;
  console.log(requrl);
  res.end();
});

server.listen(8080);

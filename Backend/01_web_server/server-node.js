const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello Ice tea")
  }
  else if (req.url === '/login') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello Ice tea.Login")
  }
  else if (req.url === '/register') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello Ice tea.Register")
  }
  else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end("Server not responding")
  }
})

server.listen(port, hostname, () => {
  console.log(`Server is listing at http://${hostname}:${port}`);

})
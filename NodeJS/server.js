const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello, World!\n');
        res.end();
    } 
    else if (req.url === '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><boy><p> Welcome to the Home Page </p></body></html>\n');
        res.end();
    }
    else if (req.url === '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p> Welcome to the Admin Page </p></body></html>\n');
        res.end();
    }
    else if (req.url === '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: "Hello World JSON"}));
        res.end();
    }
    else {
        res.end('Invalid Request!\n');
    }
});
server.listen(8000);
console.log('Nodejs server running on port 8000');

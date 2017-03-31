const http = require('http');
const os = require('os');

const env_message = process.env.MESSAGE || '';

let handleRequest = function (request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end(JSON.stringify( {
        message: `Hello World`,
        env_message,
        host: os.hostname()
    }));
};

let www = http.createServer(handleRequest);
www.listen(8080);
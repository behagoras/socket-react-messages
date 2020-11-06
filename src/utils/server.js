const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT} http://localhost:${PORT}`));

module.exports=server

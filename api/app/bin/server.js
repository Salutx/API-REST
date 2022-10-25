const http = require('http');
const app = require("../app");
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`\u001b[1;33mExpressJS is running on port ${PORT}. \u001b[0m`);
});



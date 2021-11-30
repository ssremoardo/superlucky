const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    // ...
});
io.on("connection", response => {
});
export { io, httpServer }
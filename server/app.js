const app = require("express")();
const server = require("http").createServer(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }, callback) => {
    io.emit("message", { name, message, id: uuidv4(), createdAt: Date.now() });
    callback({res: "MESSAGE was send for other users"})
  });

  socket.on("delete_message", (id) => {
    io.emit("delete_message", id);
  });

  socket.on("open_message", (id) => {
    io.emit("open_message", id);
  });

  socket.on("close_message", (id) => {
    io.emit("close_message", id);
  });

  socket.on("disconnect", () => {
    console.log("USER disconnected")
  });
});

server.listen(4000, () => {
  console.log("listening on port 4000");
});

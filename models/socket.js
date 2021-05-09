class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log(socket.id);

      socket.on("mensaje-cliente", (data) => {
        console.log("data cliente:", data);

        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;

// ESTO ES FRONT
const socket = io();

socket.on("mensaje", (data) => {
    console.log(JSON.stringify(data));
    socket.emit("mensaje", {msg: "hola desde el front al socket" });
});
import { Server } from "socket.io";

let io;
let userSocketMap = {}; // {userId->socketId}

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
      ],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("Socket: User connected:", userId);

    if (userId !== undefined) {
      userSocketMap[userId] = socket.id;
      console.log("Socket: Updated userSocketMap:", userSocketMap);
    }

    const onlineUsers = Object.keys(userSocketMap);
    console.log("Socket: Emitting online users:", onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);

    socket.on("disconnect", () => {
      console.log("Socket: User disconnected:", userId);
      delete userSocketMap[userId];
      const updatedOnlineUsers = Object.keys(userSocketMap);
      console.log(
        "Socket: Updated online users after disconnect:",
        updatedOnlineUsers
      );
      io.emit("getOnlineUsers", updatedOnlineUsers);
    });
  });

  return io;
};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

export { io };

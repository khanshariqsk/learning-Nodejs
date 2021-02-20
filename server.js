const express = require("express")
const app = express()
const socketIO = require("socket.io")

const server = app.listen(8080,()=>{
    console.log("Listening to the port 8080.....")
})
const io = socketIO(server,{cors:{origin:"*"}});
app.use(express.static(__dirname + "/public"))
io.on("connection",(socket)=>{
    socket.join("level")
    io.to("level").emit("joined","HelloJI")
})



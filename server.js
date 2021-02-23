const express = require("express")
const app = express()
const socketIO = require("socket.io")
const nameSpace = require("./data/namespaces")
// console.log(nameSpace[0])
const server = app.listen(8080,()=>{
    console.log("Listening to the port 8080.....")
})
const io = socketIO(server,{cors:{origin:"*"}});
app.use(express.static(__dirname + "/public"))
io.of('/').on("connection",(socket)=>{
   const nsData = nameSpace.map((data)=>{
       return {
           img:data.img,
           endpoint:data.endpoint
       }
   })
   socket.emit("nsData",nsData)
})
nameSpace.forEach(namespace=>{
    io.of(namespace.endpoint).on("connection",(nsSocket)=>{
        nsSocket.emit("roomData",nameSpace[0].rooms)
    })
})


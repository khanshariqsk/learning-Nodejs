const socket = io("http://localhost:8080")
const socket2 = io("http://localhost:8080/main")

socket.on("connect",()=>{
    console.log(socket.id)
})
socket2.on("connect",()=>{
    console.log(socket2.id)
})
const socket = io("http://localhost:8080")
const socket2 = io("http://localhost:8080/main")

socket.on("joined",(data)=>{
    console.log(data)
})
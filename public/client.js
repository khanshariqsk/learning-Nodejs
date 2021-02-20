const socket = io("http://localhost:8080")
const socket2 = io("http://localhost:8080/main")

socket2.on("connect",()=>{
    console.log(socket2.id)
})
socket.on("connect",()=>{
    console.log(socket.id)
})

socket2.on("mainCon",data=>{
    console.log(data)
})
socket.on("welcome",data=>{
    console.log(data)
})
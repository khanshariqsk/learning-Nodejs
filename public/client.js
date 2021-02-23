const socket = io("http://localhost:8080")
const socket2 = io("http://localhost:8080/main")

socket.on("nsData", (nsData) => {
    document.querySelector('.namespaces').innerHTML = "";
    nsData.forEach(data => {
        document.querySelector('.namespaces').innerHTML += `<div class="namespace" ns="${data.endpoint}"><img
        src="${data.img}" >
</div>`
    });
    document.querySelectorAll(".namespace").forEach((element) => {
        element.addEventListener('click', (e) => {
            console.log(element.getAttribute('ns'))
        })
    })
})
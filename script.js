let bandera = true 
let buscar = document.getElementById("buscar")
let boton = document.getElementById("boton")

boton.addEventListener("click", function(event) {
    event.preventDefault()

    if (bandera==true) {
        buscar.classList.remove("invisible")
    }else{ 
        buscar.classList.add("invisible")

    }

    bandera= !bandera
    


})

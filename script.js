function eliminar_comentario(eliminar){
    let localTarea = JSON.parse(localStorage.getItem("arreglo"))
    arrayHacer.splice(eliminar , 1)
    localStorage.setItem("arreglo", JSON.stringify(arrayHacer))
    mostrar()
}

function eliminarTodo(){
    localStorage.clear()
    mostrar()

}

const agregar = document.getElementsByClassName("agregar")[0]
const que_hacer = document.getElementsByClassName("que_hacer")[0]

agregar.addEventListener ("click", function(){
        if (que_hacer.value.trim() !=0){
            let localTarea = JSON.parse(localStorage.getItem("arreglo"))
            if(localTarea === null){
            arrayHacer = []
    }
    else{
        arrayHacer = localTarea;
    } 
    arrayHacer.push(que_hacer.value)
    localStorage.setItem("arreglo", JSON.stringify(arrayHacer))
    }
    
    mostrar()
})

function mostrar(){

    let agregarInner = "";
    let mostrarTarea = document.querySelector(".container_dos")
    let localTarea = JSON.parse(localStorage.getItem("arreglo"))
    if(localTarea === null){
        arrayHacer = []
    }else{
        arrayHacer = localTarea;
    }
    arrayHacer.forEach((comentarios , eliminar) => {
        agregarInner += `
        <div class="listado">
        <p class="comentarios">${comentarios}</p>
        <button class="boton-eliminar" onClick="eliminar_comentario(${eliminar})">BORRAR</button>
        </div>
        `
    });
    mostrarTarea.innerHTML = agregarInner; 
}

//APLICACION DE LIBRERIA
let Toast = document.getElementById("Toast");
Toast.addEventListener("click",function(){
        
    Toastify({
        text:"AGREGADO!!",
        position:"center",
        gravity:"top",
        duration: 4000,
        style :{
        background: "#ff5475",
        color:"white",
        }
    }).showToast();
})

//APLICACION DE API
let frase = document.getElementById("frase");
let autor = document.getElementById("autor");
let btn = document.getElementById("bt");

const url = "https://api.quotable.io/random";

let getFrase = ()=>{
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        frase.innerText = item.content;
        autor.innerText = item.author;
    });
} 

window.addEventListener("load", getFrase);
btn.addEventListener("click",getFrase);
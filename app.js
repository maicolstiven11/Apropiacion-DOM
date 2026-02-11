console.log(document);
const p = document.querySelector(`p`);
const byclass = document.querySelector(`.parrafo`);
const nodeElement = document.querySelectorAll(`p`);
const Documento = document.querySelector(`#documento`);
const curso = document.createElement(`p`);
const body = document.querySelector(`body`);
const nombre = document.querySelector(`#nombre`);
const formulario = document.querySelector(`#formulario`);
const tareasInput = document.querySelector(`#tareasInput`);
const tareas = document.querySelector(`#tareas`);



console.log(p);


p.textContent = "Michael";  

console.log(byclass);
byclass.textContent = "Michael";

console.log(nodeElement);

// for (let i = 0; i < nodeElement.length; i++) {
//     console.log(nodeElement[i]);
// }

console.log(Documento);

curso.textContent = "Adso : 299281";

body.appendChild(curso);


// Documento.addEventListener(`click`, () =>{
//     body.classList.add(`bg`);
// });

Documento.addEventListener(`click`, () =>{
    body.classList.toggle(`bg`);
});


formulario.addEventListener(`submit`, (event) =>{
    event.preventDefault();
    console.log(nombre.value);
    if(nombre.value == ""){
        alert("El campo del nombre esta vacio llenelo");
        nombre.classList.add(`error`);
    }
    else{
        const tarea = document.createElement(`p`);
        tarea.textContent = nombre.value;
        tareas.appendChild(tarea);              
        const contenedorTareas = document.createElement(`p`);
        contenedorTareas.textContent = tareasInput.value;
        tareas.appendChild(contenedorTareas);
    }

});
formulario.addEventListener(`submit`, (event) =>{
    event.preventDefault();
    console.log(tareasInput.value);
    if(tareasInput.value == ""){
        alert("El campo del body esta vacio llenelo");
    }
    
    else{
        nombre.value = "";
        tareasInput.value = "";
    }
});


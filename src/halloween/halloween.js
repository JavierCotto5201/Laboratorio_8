import halloween from "../imagenes/halloween.jpg";
import "../css/paginaI.scss";

const div_hallo = document.createElement("div");

const imagen_hallo = document.createElement("img");
imagen_hallo.src = halloween;
imagen_hallo.width = "350";
div_hallo.appendChild(imagen_hallo);

const p_hallo = document.createElement("p");
p_hallo.innerText = "Era la semana de Halloween, con mis cuates no habiamos adquirido ninguna entrada para alguna que otra fiesta, por lo que tuvimos la idea de hacer una fiesta en mi casa. Hicimos cooperacha para comprar lo que ibamos a tomar, los premios(botellas de alcohol) para el mejor disfrazado y llame a mi amigo el que producia música si queria hacer un concierto dentro de mi casa, pues el trabajaba en The Box y hacia conciertos ahi, y el accedio. Fue una fiesta super loca, donde la mayoria termino mal, pero alegre"
div_hallo.appendChild(p_hallo);

const lista_hallo = document.createElement("ul");
const l1_hallo = document.createElement("li");
const a1_hallo = document.createElement("a");
a1_hallo.href = "Inicio.html";
a1_hallo.innerText = "Regreso a pagina pricipal";
l1_hallo.appendChild(a1_hallo);
lista_hallo.appendChild(l1_hallo);
div_hallo.appendChild(lista_hallo);

const label_hallo = document.createElement("label");
label_hallo.id = "pagina"
label_hallo.innerText = "Pagina 6  \t";

const progress_hallo = document.createElement("progress");
progress_hallo.id = "file";
progress_hallo.innerText = "60%";
progress_hallo.value = 60;
progress_hallo.max = 100;

document.getElementById("cuerpo8").appendChild(div_hallo);
document.getElementById("cuerpo8").appendChild(label_hallo);
document.getElementById("cuerpo8").appendChild(progress_hallo);
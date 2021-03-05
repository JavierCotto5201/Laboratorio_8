import segunda from "../imagenes/sadj.jpg";
import "../css/paginaI.scss";

const div_2da = document.createElement("div");

const a2_2da = document.createElement("a");
a2_2da.href = "https://fanlink.to/illbebacksoon";

const imagen_2da = document.createElement("img");
imagen_2da.src = segunda;
imagen_2da.width = "350";
a2_2da.appendChild(imagen_2da);
div_2da.appendChild(a2_2da);

const p_2da = document.createElement("p_2da");
p_2da.innerText = "Aprovechando un poco mi laboratorio, comparto mi Segunda Cancion, lanzada en este 2021, donde se vienen muchas proximas canciones, y donde espero romperla con un album multigenero a fin de anio."
div_2da.appendChild(p_2da);

const lista = document.createElement("ul");
const l1_2da = document.createElement("li");
const a1_2da = document.createElement("a");
a1_2da.href = "Inicio.html";
a1_2da.innerText = "Regreso a pagina pricipal";
l1_2da.appendChild(a1_2da);
lista.appendChild(l1_2da);
div_2da.appendChild(lista);

const label_2da = document.createElement("label");
label_2da.id = "pagina"
label_2da.innerText = "Pagina 10  \t";

const progress_2da = document.createElement("progress");
progress_2da.id = "file";
progress_2da.innerText = "100%";
progress_2da.value = 100;
progress_2da.max = 100;

document.getElementById("cuerpo2").appendChild(div_2da);
document.getElementById("cuerpo2").appendChild(label_2da);
document.getElementById("cuerpo2").appendChild(progress_2da);
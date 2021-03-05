import trenzas from "../imagenes/trenzas.jpg";
import "../css/paginaI.scss";

const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = trenzas;
imagen.width = "250";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "Este dia fue muy interesante. Me levante tarde, tipo 10:30 am y recien me levante me hcie un huevo revuelto con salchicha y frijoles. Mi hermana y madre habian citado a una persona para que les cortara el pelo y les colocara tinte, y pues aprovechando que tenia la idea loca de arreglarme con trenzas el pelo, le comente la idea y pues me las hizo. Lo chistoso es que se utilizaron hules para pulseras y no para pelo, por lo que no me duraron mucho. Durante la realización de estas, tuve que estar con gorra la mayoria de tiempo, pues mi papa es algo estricto por lo que me ahorraba la regañada con eso."
div.appendChild(p);

const lista = document.createElement("ul");
const l1 = document.createElement("li");
const a1 = document.createElement("a");
a1.href = "Inicio.html";
a1.innerText = "Regreso a pagina pricipal";
l1.appendChild(a1);
lista.appendChild(l1);
div.appendChild(lista);

const label = document.createElement("label");
label.id = "pagina"
label.innerText = "Pagina 3  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "30%";
progress.value = 30;
progress.max = 100;

document.getElementById("cuerpo10").appendChild(div);
document.getElementById("cuerpo10").appendChild(label);
document.getElementById("cuerpo10").appendChild(progress);
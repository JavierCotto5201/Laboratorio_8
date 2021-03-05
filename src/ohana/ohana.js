import ohana from "../imagenes/ohana.jpg";
import "../css/paginaI.scss";

const div_ohana = document.createElement("div");

const imagen_ohana = document.createElement("img");
imagen_ohana.src = ohana;
imagen_ohana.width = "500";
div_ohana.appendChild(imagen_ohana);

const p = document.createElement("p");
p.innerText = "El dia 20 de diciembre de el año 2019, celebrabamos el cumpleaños de uno de mis mejores amigos, y pues nos juntamos en su casa para tirar party. Ese dia llevamos todos lo que ibamos a tomar, jugamos beer pong, stacks, kings, todo el juego que implicase tomar, y nos tomamos una foto al final, para recordar lo que fue esa fiesta y lo alegre que la pasamos."
div_ohana.appendChild(p);

const lista_ohana = document.createElement("ul");
const l1_ohana = document.createElement("li");
const a1_ohana = document.createElement("a");
a1_ohana.href = "Inicio.html";
a1_ohana.innerText = "Regreso a pagina pricipal";
l1_ohana.appendChild(a1_ohana);
lista_ohana.appendChild(l1_ohana);
div_ohana.appendChild(lista_ohana);

const label_ohana = document.createElement("label");
label_ohana.id = "pagina"
label_ohana.innerText = "Pagina 9  \t";

const progress_ohana = document.createElement("progress");
progress_ohana.id = "file";
progress_ohana.innerText = "90%";
progress_ohana.value = 90;
progress_ohana.max = 100;

document.getElementById("cuerpo9").appendChild(div_ohana);
document.getElementById("cuerpo9").appendChild(label_ohana);
document.getElementById("cuerpo9").appendChild(progress_ohana);
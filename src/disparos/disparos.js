import disparos from "../imagenes/pistola.jpg";
import "../css/paginaI.scss";

const div_disp = document.createElement("div");

const imagen_disp = document.createElement("img");
imagen_disp.src = disparos;
imagen_disp.width = "450";
div_disp.appendChild(imagen_disp);

const p_disp = document.createElement("p");
p_disp.innerText = "Habiamos planeado con mi padre ir a disparar al Campo, Tiro y Pesca pues habia adquirido un rifle de 9mm y queriamos probarlo. Fuimos al lugar, esperamos a los amigos de mi padre y empezo la accion. Disparamos varias municiones a los blancos, y logramos probar el rifle de 9mm, la pistola de 9mm y otras pistolas que llevaban los compañeros de mis papas. Luego de eso fuimos a comer a la hacienda real, desde las 9 y salimos a las 3 de la mañana. Durante el dia disparamos terminando con un buen azado y bebida."
div_disp.appendChild(p_disp);

const lista_disp = document.createElement("ul");
const l1_disp = document.createElement("li");
const a1_disp = document.createElement("a");
a1_disp.href = "Inicio.html";
a1_disp.innerText = "Regreso a pagina pricipal";
l1_disp.appendChild(a1_disp);
lista_disp.appendChild(l1_disp);
div_disp.appendChild(lista_disp);

const label_disp = document.createElement("label");
label_disp.id = "pagina"
label_disp.innerText = "Pagina 7  \t";

const progress_disp = document.createElement("progress");
progress_disp.id = "file";
progress_disp.innerText = "70%";
progress_disp.value = 70;
progress_disp.max = 100;

document.getElementById("cuerpo6").appendChild(div_disp);
document.getElementById("cuerpo6").appendChild(label_disp);
document.getElementById("cuerpo6").appendChild(progress_disp);
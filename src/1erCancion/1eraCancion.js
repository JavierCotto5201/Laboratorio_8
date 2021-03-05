import primera from "../imagenes/cancion1.jpg";
import primeraS from "../imagenes/cancion.mpeg";
import "../css/paginaI.scss";

const div_1era = document.createElement("div");

const imagen_1era = document.createElement("img");
imagen_1era.src = primera;
imagen_1era.width = "350";
div_1era.appendChild(imagen_1era);

const p_1era = document.createElement("p");
p_1era.innerText = "Empezando el anio, uno de mis amigos que produce musica me contacto para darme la idea de retomar un proyecto que tuvimos en 2017, sobre sacar una cancion. Dentro de mis ideas estaba realizar una canción de TRAP pues en ese tiempo escuchaba mucho el genero. Empece a escribir la letra, el a producir el beat y logramos sacar una cancion que a mi parecer si hubieramos tenido mejores recursos como microfono y más experiencia a la hora de mezclar, hubiera sido mejor de lo que fue."
div_1era.appendChild(p_1era);

const audio = document.createElement("audio")
audio.controls = true;

const source = document.createElement("source");
source.src = primeraS;
source.type ="audio/ogg";
audio.appendChild(source);
div_1era.appendChild(audio);

const br1_1era = document.createElement("br")
div_1era.appendChild(br1_1era);
const br2_1era = document.createElement("br")
div_1era.appendChild(br2_1era);

const lista_1era = document.createElement("ul");

const l1_1era = document.createElement("li");
const a1_1era = document.createElement("a");
a1_1era.href = "https://www.instagram.com/silegray/";
a1_1era.innerText = "Productor del beat";
l1_1era.appendChild(a1_1era);
lista_1era.appendChild(l1_1era);

const l2_1era = document.createElement("li");
const a2_1era = document.createElement("a");
a2_1era.href = "https://www.instagram.com/kistudiogt/";
a2_1era.innerText = "Disenador de la portada";
l2_1era.appendChild(a2_1era);
lista_1era.appendChild(l2_1era);

const l3_1era = document.createElement("li");
const a3_1era = document.createElement("a");
a3_1era.href = "Inicio.html";
a3_1era.innerText = "Regreso a pagina pricipal";
l3_1era.appendChild(a3_1era);
lista_1era.appendChild(l3_1era);

div_1era.appendChild(lista_1era);

const label_1era = document.createElement("label");
label_1era.id = "pagina"
label_1era.innerText = "Pagina 2  \t";

const progress_1era = document.createElement("progress");
progress_1era.id = "file";
progress_1era.innerText = "20%";
progress_1era.value = 20;
progress_1era.max = 100;

document.getElementById("cuerpo1").appendChild(div_1era);
document.getElementById("cuerpo1").appendChild(label_1era);
document.getElementById("cuerpo1").appendChild(progress_1era);
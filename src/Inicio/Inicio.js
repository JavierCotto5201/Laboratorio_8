import "../Inicio/Inicio.scss";
import '../../node_modules/bootstrap/dist/js/bootstrap.js';


const link_inicio = document.createElement('div');
link_inicio.id = "links";

const titulo_inicio = document.createElement("h2");
titulo_inicio.id = "titulo_inicio";
titulo_inicio.innerText = "MI MEJOR ANIO: 2019";
link_inicio.appendChild(titulo_inicio);

const intro_inicio = document.createElement("h3");
intro_inicio.id = "intro_inicio";
intro_inicio.innerText = "El otro diaaaa...Estaba recibiendo mi clase de sistemas y tecnologias web y nos propusieron hacer como laboratorio una pagina web que contase una historia de nosotro o inventada. Este fue el resultado..."
link_inicio.appendChild(intro_inicio);

const lista_inicio = document.createElement("ol");
lista_inicio.id="lista_inicio";
link_inicio.appendChild(lista_inicio);

const l1_inicio = document.createElement("li");
const a1_inicio = document.createElement("a");
a1_inicio.href = "graduacion.html";
a1_inicio.innerText = "Mi Graduacion 2018";
l1_inicio.appendChild(a1_inicio);
lista_inicio.appendChild(l1_inicio);

const l2_inicio = document.createElement("li");
const a2_inicio = document.createElement("a");
a2_inicio.href = "primerCancion.html";
a2_inicio.innerText = "Mi Primer Cancion";
l2_inicio.appendChild(a2_inicio);
lista_inicio.appendChild(l2_inicio);

const l3_inicio = document.createElement("li");
const a3_inicio = document.createElement("a");
a3_inicio.href = "trenzas.html";
a3_inicio.innerText = "El dia que intente algo nuevo...";
l3_inicio.appendChild(a3_inicio);
lista_inicio.appendChild(l3_inicio);

const l4_inicio = document.createElement("li");
const a4_inicio = document.createElement("a");
a4_inicio.href = "Carro.html";
a4_inicio.innerText = "A mejorar el carro se ha dicho";
l4_inicio.appendChild(a4_inicio);
lista_inicio.appendChild(l4_inicio);

const l5_inicio = document.createElement("li");
const a5_inicio = document.createElement("a");
a5_inicio.href = "badBunny.html";
a5_inicio.innerText = "EL MEJOR CONCIERTO";
l5_inicio.appendChild(a5_inicio);
lista_inicio.appendChild(l5_inicio);

const l6_inicio = document.createElement("li");
const a6_inicio = document.createElement("a");
a6_inicio.href = "halloween.html";
a6_inicio.innerText = "Una fiesta para recordar";
l6_inicio.appendChild(a6_inicio);
lista_inicio.appendChild(l6_inicio);

const l7_inicio = document.createElement("li");
const a7_inicio = document.createElement("a");
a7_inicio.href = "disparos.html";
a7_inicio.innerText = "Vamos a reventar a los blancos";
l7_inicio.appendChild(a7_inicio);
lista_inicio.appendChild(l7_inicio);

const l8_inicio = document.createElement("li");
const a8_inicio = document.createElement("a");
a8_inicio.href = "buki.html";
a8_inicio.innerText = "Una noche para recordar";
l8_inicio.appendChild(a8_inicio);
lista_inicio.appendChild(l8_inicio);

const l9_inicio = document.createElement("li");
const a9_inicio = document.createElement("a");
a9_inicio.href = "Ohana.html";
a9_inicio.innerText = "Ma Family";
l9_inicio.appendChild(a9_inicio);
lista_inicio.appendChild(l9_inicio);

const l10_inicio = document.createElement("li");
const a10_inicio = document.createElement("a");
a10_inicio.href = "segundaCancion.html";
a10_inicio.innerText = "Empieza algo grande";
l10_inicio.appendChild(a10_inicio);
lista_inicio.appendChild(l10_inicio);

const br1 = document.createElement("br")
lista_inicio.appendChild(br1);
const br2 = document.createElement("br")
lista_inicio.appendChild(br2);
const br3 = document.createElement("br")
lista_inicio.appendChild(br3);
const br4 = document.createElement("br")
lista_inicio.appendChild(br4);
const br5 = document.createElement("br")
lista_inicio.appendChild(br5);

const lista1_inicio = document.createElement("ul");
lista1_inicio.id = "lista1_inicio";
link_inicio.appendChild(lista1_inicio);

const l11_inicio = document.createElement("li");
const a11_inicio = document.createElement("a")
a11_inicio.href = "https://www.instagram.com/cotto5201/";
a11_inicio.innerText = "Instagram Personal";
l11_inicio.appendChild(a11_inicio);
lista1_inicio.appendChild(l11_inicio);

const label_inicio = document.createElement("label");
label_inicio.id = "pagina"
label_inicio.innerText = "Pagina 0  \t";

const progress_inicio = document.createElement("progress");
progress_inicio.id = "file";
progress_inicio.innerText = "0%";
progress_inicio.value = 0;
progress_inicio.max = 100;

const footer_inicio = document.createElement("footer");
footer_inicio.id = "foot";

const p1_inicio = document.createElement("p");
p1_inicio.innerText = "Javier Alejandro Cotto Argueta";
footer_inicio.appendChild(p1_inicio);

const p2_inicio = document.createElement("p");
footer_inicio.appendChild(p2_inicio);

const a13_inicio = document.createElement("a");
a13_inicio.href= "cot19324@uvg.edu.gt";
a13_inicio.innerText = "cot19324@uvg.edu.gt";
footer_inicio.appendChild(a13_inicio);

document.getElementById("cuerpo").appendChild(link_inicio);
document.getElementById("cuerpo").appendChild(label_inicio);
document.getElementById("cuerpo").appendChild(progress_inicio);
document.getElementById("cuerpo").appendChild(footer_inicio);

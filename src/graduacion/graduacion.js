import graduacion from "../imagenes/graduacion.jpg";
import piratas from "../imagenes/piratas.jpg";
import sicarios from "../imagenes/sicarios.jpg";
import "../css/paginaI.scss";

const div_graduacion = document.createElement("div");

const imagen_graduacion = document.createElement("img");
imagen_graduacion.src = graduacion;
imagen_graduacion.width = "300";
div_graduacion.appendChild(imagen_graduacion);

const p_graduacion = document.createElement("p");
p_graduacion.innerText = "Mi 2018 fue un gran año. Empece con el primer ultimo dia de colegio, una caravana super alegre, con mariachis, corriendo por todo el colegio, haciendo ruidos con bubucelas, quemando cuetes y más de algun compañero de goma me pude encontrar. El año fue lleno de alegrias como la ultima interaulas donde quedamos 2do tristemente, el ultimo mercadito, el dia country, los ultimos actos civicos, y la ultima fiesta de gala dentro del colegio. Mi super peda de mi cumpleaños donde todos terminamos muertos al final:). Puedo decir que me la pase super bien dentro de este año pero lo que más disfrute fue la semana de graduandos y posteriormente la graduacion. La semana de graduandos estuvo muy interesante, pues nos disfrazamos de militares, piratas, sicarios y obviamente todos esos dias nos fuimos ha hacer desmadre y celebrar a la casa de algun compañero. Llego el dia de la graduación que se hizo en un salon del Camino Real y donde hubieron muchas risas, sonrisas y alguna que otra lagrima por parte de los estudiantes y padres. Tambien mi regalo fue lo mejor, pues me dieron mi actual carro un Jetta 2014 SE"
div_graduacion.appendChild(p_graduacion);

const detail = document.createElement("details")
const summary = document.createElement("summary")
summary.innerText = "DIA DE PIRATAS"
detail.appendChild(summary);
div_graduacion.appendChild(detail);

const imagen1_graduacion = document.createElement("img");
imagen1_graduacion.src = piratas;
imagen1_graduacion.width = "300";
detail.appendChild(imagen1_graduacion);

const br_graduacion = document.createElement("br");
div_graduacion.appendChild(br_graduacion);

const detail1 = document.createElement("details")
const summary1 = document.createElement("summary")
summary1.innerText = "DIA DE SICARIOS"
detail1.appendChild(summary1);
div_graduacion.appendChild(detail1);

const imagen2_graduacion = document.createElement("img");
imagen2_graduacion.src = sicarios;
imagen2_graduacion.width = "300";
detail1.appendChild(imagen2_graduacion);


const lista_graduacion = document.createElement("ul");
const l1_graduacion = document.createElement("li");
const a1_graduacion = document.createElement("a");
a1_graduacion.href = "Inicio.html";
a1_graduacion.innerText = "Regreso a pagina pricipal";
l1_graduacion.appendChild(a1_graduacion);
lista_graduacion.appendChild(l1_graduacion);
div_graduacion.appendChild(lista_graduacion);

const label_graduacion = document.createElement("label");
label_graduacion.id = "pagina"
label_graduacion.innerText = "Pagina 1  \t";

const progress_graduacion = document.createElement("progress");
progress_graduacion.id = "file";
progress_graduacion.innerText = "10%";
progress_graduacion.value = 10;
progress_graduacion.max = 100;

document.getElementById("cuerpo7").appendChild(div_graduacion);
document.getElementById("cuerpo7").appendChild(label_graduacion);
document.getElementById("cuerpo7").appendChild(progress_graduacion);
import carro from "../imagenes/carro.jpg";
import "../css/paginaI.scss";

const div_carro = document.createElement("div");

const imagen_carro = document.createElement("img");
imagen_carro.src = carro;
imagen_carro.width = "450";
div_carro.appendChild(imagen_carro);

const p_carro = document.createElement("p");
p_carro.innerText = "Mi papa me queria dar un regalo por mi cumpleanios, por lo que me llevo a escogerle nuevos aros a mi carro. Fue un gran y tardado viaje. Fuimos a la terminal a buscar entre varios puestos de aros de llantas y aros donde algunos se querian tontaer a uno y otros donde estaban algo feo para el carro. Al final encontramos los indicados. Nos los colocaron los trabajadores con las herramientas respectivas, y pues mi carro quedo bien chilero. Un dato curioso es que los aros son mas anchos que las llantas por lo que se salen :D."
div_carro.appendChild(p_carro);

const lista_carro = document.createElement("ul");
const l1_carro = document.createElement("li");
const a1_carro = document.createElement("a");
a1_carro.href = "Inicio.html";
a1_carro.innerText = "Regreso a pagina pricipal";
l1_carro.appendChild(a1_carro);
lista_carro.appendChild(l1_carro);
div_carro.appendChild(lista_carro);

const label_carro = document.createElement("label");
label_carro.id = "pagina"
label_carro.innerText = "Pagina 4  \t";

const progress_carro = document.createElement("progress");
progress_carro.id = "file";
progress_carro.innerText = "40%";
progress_carro.value = 40;
progress_carro.max = 100;

document.getElementById("cuerpo5").appendChild(div_carro);
document.getElementById("cuerpo5").appendChild(label_carro);
document.getElementById("cuerpo5").appendChild(progress_carro);

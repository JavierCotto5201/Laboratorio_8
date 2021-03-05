import buki from "../imagenes/buki.mp4";
import "../css/paginaV.scss";

const vid = document.createElement("div");
vid.id = "vid";

const video = document.createElement("video");
video.id = "vidBuki";
video.src = buki;
video.width = "450";
video.autoplay = true;
vid.appendChild(video);

const p3_buki = document.createElement("p");
p3_buki.innerText ="Como todos los anios, en Guatemala es costumbre que Marco Antonio Solis viaje y haga su concierto a finales de anio. Pues este anio no era la excepcion, y lo mejor fue que me llevaron mis papas. Fuimos al concierto ubicados en una mesa y canto todas las canciones que lo llevaron al exito. Estuvimos cantando, bailando, tomando y disfrutando ese gran concierto que realizo El Buki."
vid.appendChild(p3_buki);

const lista_buki = document.createElement("ul")
vid.appendChild(lista_buki);

const l1_buki = document.createElement("li");
const a1_buki = document.createElement("a");
a1_buki.href = "Inicio.html";
a1_buki.innerText = "Regreso a pagina pricipal";
l1_buki.appendChild(a1_buki);
lista_buki.appendChild(l1_buki);

const label_buki = document.createElement("label");
label_buki.id = "pagina"
label_buki.innerText = "Pagina 8  \t";

const progress_buki = document.createElement("progress");
progress_buki.id = "file";
progress_buki.innerText = "80%";
progress_buki.value = 80;
progress_buki.max = 100;

document.getElementById("cuerpo4").appendChild(vid);
document.getElementById("cuerpo4").appendChild(label_buki);
document.getElementById("cuerpo4").appendChild(progress_buki);

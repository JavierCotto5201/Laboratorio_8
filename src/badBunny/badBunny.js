import benito from "../imagenes/benito.mp4";
import "../css/paginaV.scss";

const vid = document.createElement("div");
vid.id = "vid";

const video = document.createElement("video");
video.id = "vidBunny";
video.src = benito;
video.width = "300";
video.autoplay = true;
vid.appendChild(video);

const p3_Bunny = document.createElement("p");
p3_Bunny.innerText ="Este dia lo espere con todo mi ser. Queria ver al conejor malo otra vez, pues lo logre ver el 16/02/2017 en la University party que se hizo por parte de AM promotions. Ese dia me junte en la casa de un cuate y bajamos pro uber a Cayala, a las 12 de la tarde pues nos ibamos a juntar con otros cuates y cuatas. Fuimos a almorzar a taco bellcde Cardales y despues de ello nos fuimos a Jacks a esperar a la hermana de un cuate a mi mejor amigo. Nos pusimos a tomar dentro de jacks mientras esperabamos a las demas personas. Planeabamos llegar más tarde, pues no queriamos pasar tiempo en las canciones de fondo y los artistas de aca. Durante la espera de Bad Bunny, pasaron Sarti Boy y su novia Yessie, otros cantantes guatemaltecos y grupos, antes de Benito paso Sech que dio un buen concierto y llego el momento... Empezo a sonar RLNDT de Bad bunny y sabiamos que iba a salir ya. Mientras cantaba canciones antiguas como Soy Peor, Diles, Tu no vive asi, y similares empezo a llovisnar. A la mitad de su album Xsiempre empezo a llover super fuerte, mientras todos bien tomados y ademas lloviendo, estabamos tirando party. Super chilero el concierto, claramente el mejor concierto al que he asistido."
vid.appendChild(p3_Bunny);

const lista_Bunny = document.createElement("ul")
vid.appendChild(lista_Bunny);

const l1_Bunny = document.createElement("li");
const a1_Bunny = document.createElement("a");
a1_Bunny.href = "Inicio.html";
a1_Bunny.innerText = "Regreso a pagina pricipal";
l1_Bunny.appendChild(a1_Bunny);
lista_Bunny.appendChild(l1_Bunny);

const label_Bunny = document.createElement("label");
label_Bunny.id = "pagina"
label_Bunny.innerText = "Pagina 5  \t";

const progress_Bunny = document.createElement("progress");
progress_Bunny.id = "file";
progress_Bunny.innerText = "50%";
progress_Bunny.value = 50;
progress_Bunny.max = 100;

document.getElementById("cuerpo3").appendChild(vid);
document.getElementById("cuerpo3").appendChild(label_Bunny);
document.getElementById("cuerpo3").appendChild(progress_Bunny);
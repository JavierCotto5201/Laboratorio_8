(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var t=e.g.document;if(!a&&t&&(t.currentScript&&(a=t.currentScript.src),!a)){var n=t.getElementsByTagName("script");n.length&&(a=n[n.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=e.p+"src/imagenes/ pistola.jpg",t=document.createElement("div"),n=document.createElement("img");n.src=a,n.width="450",t.appendChild(n);const r=document.createElement("p");r.innerText="Habiamos planeado con mi padre ir a disparar al Campo, Tiro y Pesca pues habia adquirido un rifle de 9mm y queriamos probarlo. Fuimos al lugar, esperamos a los amigos de mi padre y empezo la accion. Disparamos varias municiones a los blancos, y logramos probar el rifle de 9mm, la pistola de 9mm y otras pistolas que llevaban los compañeros de mis papas. Luego de eso fuimos a comer a la hacienda real, desde las 9 y salimos a las 3 de la mañana. Durante el dia disparamos terminando con un buen azado y bebida.",t.appendChild(r);const i=document.createElement("ul"),o=document.createElement("li"),l=document.createElement("a");l.href="Inicio.html",l.innerText="Regreso a pagina pricipal",o.appendChild(l),i.appendChild(o),t.appendChild(i);const c=document.createElement("label");c.id="pagina",c.innerText="Pagina 7  \t";const s=document.createElement("progress");s.id="file",s.innerText="70%",s.value=70,s.max=100,document.getElementById("cuerpo6").appendChild(t),document.getElementById("cuerpo6").appendChild(c),document.getElementById("cuerpo6").appendChild(s)})();
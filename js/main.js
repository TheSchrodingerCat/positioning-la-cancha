
var seccion = document.getElementById("cancha-section");

var bordeCancha = document.createElement("div");
bordeCancha.setAttribute("class","cancha");
bordeCancha.setAttribute("id","cancha-big");

var delineado = document.createElement("div");
delineado.setAttribute("class","cancha");
delineado.setAttribute("id","borde");

bordeCancha.appendChild(delineado);

var arcoUno = document.createElement("div");
arcoUno.setAttribute("class","arcos");
arcoUno.setAttribute("id","arcoUno");

var arcoDos = document.createElement("div");
arcoDos.setAttribute("class","arcos");
arcoDos.setAttribute("id","arcoDos");

var circle = document.createElement("div");
circle.setAttribute("class","cancha");
circle.setAttribute("id","circulo");

var bola;
for (i=0 ; i<3 ; i++){
	bola = document.createElement("div");
	bola.setAttribute("class","ball");
	bola.setAttribute("id","ball" + i.toString());

	bola.style.width = "15px";
	bola.style.height = "15px";
	bola.style.backgroundSize = "cover";
	bola.style.position = "absolute";

	delineado.appendChild(bola);
}

seccion.appendChild(bordeCancha);
delineado.appendChild(arcoUno);
delineado.appendChild(arcoDos);
delineado.appendChild(circle);

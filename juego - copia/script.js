
//Constructor de Modo juego
var juego = function(anchura,altura,v1,v2,v3,v4,v5){
	//propiedades
	this.anchura=anchura;
	this.altura=altura;

	//funciones
	//Llamada al mapa
	this.Tipo_mapa = function() {

		var mapa1= new mapa(this.anchura,this.altura);
		mapa1.CreaMapa();
		//Creación de los cuadrados enemigos
		bloque1= new bloque_izq_a_der(3,19,"bloque1","3,19","15,19",v1,"grey",tamano_m);
			bloque1.PonerBloque();

	    bloque2= new bloque_izq_a_der(3,23,"bloque2","3,23","10,23",v2,"orange",tamano_m);
			bloque2.PonerBloque();

		bloque3= new bloque_izq_a_der(0,16,"bloque3","0,16","22,16",v3,"blue",tamano_m);
			bloque3.PonerBloque();

		bloque4= new bloque_izq_a_der(1,17,"bloque4","1,17","8,17",v4,"green",tamano_m);
			bloque4.PonerBloque();

		bloque5= new bloque_abajo_a_arriba(5,4,"bloque5","5,4","14,13",v5,"black",tamano_m);
			bloque5.PonerBloque();
	}
}


//OBJETO MAPA
var mapa = function(anchura,altura){

		//Propiedades
		this.anchura=anchura,
		this.altura=altura,


		//Funciones de Mapa CREACIÓN_MAPA
		this.CreaMapa = function() {
			var tabla = document.createElement("table");
			tabla.id="tablaColor";
			document.body.appendChild(tabla);

			for(var y=0;y<anchura;y++){

				var columna = document.createElement("tr");
				columna.id="columna"+[y];
				columna.style.border="1px solid";//CSS
				document.getElementById("tablaColor").appendChild(columna);

				for(var x=0;x<altura;x++){

					var fila = document.createElement("td");
					fila.id=x+","+y;
					fila.style.backgroundColor="white";
					//Creamos bola
          //-> Posición de cada uno de los cuadrados, según el id de la fila, lugar.
					//Celdas nuevas si es FACIL
					if(anchura && altura ==24 && fila.id=="11,2"){
						fila.style.backgroundColor="red";
					}

					if(anchura && altura ==24 && fila.id=="0,14" || anchura && altura ==24 && fila.id=="9,17" || anchura && altura ==24 && fila.id=="1,18" || anchura && altura ==24 && fila.id=="9,9" || anchura && altura ==24 && fila.id=="14,21" || anchura && altura ==24 && fila.id=="15,11" ||  anchura && altura ==24 && fila.id=="0,8" ||  anchura && altura ==24 && fila.id=="1,5"){
						fila.style.backgroundColor="orange";

					}

					if(anchura && altura ==24 && fila.id=="0,12" || anchura && altura==24 && fila.id=="0,20" || anchura && altura==24 && fila.id=="0,10" || anchura && altura==24 && fila.id=="0,6" || anchura && altura ==34 && fila.id=="6,18"  ||  anchura && altura ==24 && fila.id=="0,20"){
						fila.style.backgroundColor="blue";

					}

					if(anchura && altura ==24 && fila.id=="12,14" || anchura && altura==24 && fila.id=="0,9" || anchura && altura==24 && fila.id=="4,21" || anchura && altura==24 && fila.id=="15,15" || anchura && altura ==24 && fila.id=="8,20" ||  anchura && altura ==24 && fila.id=="10,5"){
						fila.style.backgroundColor="green";

					}


					if(anchura && altura ==24 && fila.id=="4,13" || anchura && altura ==24 && fila.id=="7,22" || anchura && altura ==24 && fila.id=="4,7" || anchura && altura ==24 && fila.id=="1,15" || anchura && altura ==24 && fila.id=="0,11" || anchura && altura ==24 && fila.id=="3,33" || anchura && altura ==24 && fila.id=="10,18"){
						fila.style.backgroundColor="grey";

					}

					//Celdas nuevas si es MEDIO
					if(anchura && altura ==34 && fila.id=="16,2"){
						fila.style.backgroundColor="red";

					}

					if(anchura && altura ==34 && fila.id=="11,11" || anchura && altura ==34 && fila.id=="0,29" || anchura && altura ==34 && fila.id=="13,31" || anchura && altura ==34 && fila.id=="5,14" || anchura && altura ==34 && fila.id=="1,24" || anchura && altura ==34 && fila.id=="9,6" || anchura && altura ==34 && fila.id=="9,17" || anchura && altura ==34 && fila.id=="1,7"){
						fila.style.backgroundColor="grey";

					}

					if(anchura && altura ==34 && fila.id=="6,32" || anchura && altura ==34 && fila.id=="7,9" || anchura && altura ==34 && fila.id=="1,27" || anchura && altura ==34 && fila.id=="0,4" || anchura && altura ==34 && fila.id=="5,25" || anchura && altura ==34 && fila.id=="5,21" || anchura && altura ==34 && fila.id=="9,5" || anchura && altura ==34 && fila.id=="9,28"){
						fila.style.backgroundColor="blue";

					}

					if(anchura && altura ==34 && fila.id=="17,29" || anchura && altura ==34 && fila.id=="25,27" || anchura && altura ==34 && fila.id=="1,15" || anchura && altura ==34 && fila.id=="20,13" || anchura && altura ==34 && fila.id=="3,12" || anchura && altura ==34 && fila.id=="18,8" || anchura && altura ==34 && fila.id=="0,5" || anchura && altura ==34 && fila.id=="21,22" || anchura && altura ==34 && fila.id=="17,10"){
						fila.style.backgroundColor="orange";

					}

					if(anchura && altura ==34 && fila.id=="23,30" || anchura && altura ==34 && fila.id=="17,19" || anchura && altura ==34 && fila.id=="3,31" || anchura && altura ==34 && fila.id=="20,14" || anchura && altura ==34 && fila.id=="3,10" || anchura && altura ==34 && fila.id=="3,10" || anchura && altura ==34 && fila.id=="3,22" || anchura && altura ==34 && fila.id=="13,12" || anchura && altura ==34 && fila.id=="17,24" || anchura && altura ==34 && fila.id=="17,7"){
						fila.style.backgroundColor="green";

					}

					//Celdas nuevas si es DIFICIL
					if(anchura && altura ==44 && fila.id=="20,3"){
						fila.style.backgroundColor="red";

					}

					if(anchura && altura ==44 && fila.id=="0,42" || anchura && altura ==44 && fila.id=="17,41" || anchura && altura ==44 && fila.id=="7,10" || anchura && altura ==44 && fila.id=="11,6" || anchura && altura ==44 && fila.id=="9,13" || anchura && altura ==44 && fila.id=="12,27" || anchura && altura ==44 && fila.id=="10,20" || anchura && altura ==44 && fila.id=="11,33" || anchura && altura ==44 && fila.id=="11,23" || anchura && altura ==44 && fila.id=="3,8" || anchura && altura ==44 && fila.id=="1,40" || anchura && altura ==44 && fila.id=="17,14"){
						fila.style.backgroundColor="blue";

					}

					if(anchura && altura ==44 && fila.id=="0,6" || anchura && altura ==44 && fila.id=="10,17"  || anchura && altura ==44 && fila.id=="31,7" || anchura && altura ==44 && fila.id=="1,31" || anchura && altura ==44 && fila.id=="13,38" || anchura && altura ==44 && fila.id=="28,28" || anchura && altura ==44 && fila.id=="20,29" || anchura && altura ==44 && fila.id=="2,15" || anchura && altura ==44 && fila.id=="4,9" || anchura && altura ==44 && fila.id=="0,6"){
						fila.style.backgroundColor="orange";

					}

					if(anchura && altura ==44 && fila.id=="19,17" || anchura && altura ==44 && fila.id=="24,16" || anchura && altura ==44 && fila.id=="1,7" || anchura && altura ==44 && fila.id=="6,29" || anchura && altura ==44 && fila.id=="21,31" || anchura && altura ==44 && fila.id=="3,35" || anchura && altura ==44 && fila.id=="18,22" || anchura && altura ==44 && fila.id=="14,24" || anchura && altura ==44 && fila.id=="23,37"){
						fila.style.backgroundColor="grey";

					}

					if(anchura && altura ==44 && fila.id=="32,25" || anchura && altura ==44 && fila.id=="1,27" || anchura && altura ==44 && fila.id=="12,31" || anchura && altura ==44 && fila.id=="2,37" || anchura && altura ==44 && fila.id=="25,12" || anchura && altura ==44 && fila.id=="1,11" || anchura && altura ==44 && fila.id=="27,9" || anchura && altura ==44 && fila.id=="24,35"){
						fila.style.backgroundColor="green";

					}
					fila.style.border="1px solid";
					document.getElementById("columna"+[y]).appendChild(fila);
				}
			}
		}
	};





//OBJETO BLOQUE DER IZQ
var bloque_izq_a_der = function(posX,posY,num_bloque,posXY_inicio_mov,posXY_fin_mov,velocidad,color,tamano_mapa){
		//Variables
		var mov_bloque_der=setInterval(num_bloque+'.MoverBloque_derecha()',velocidad);
		var mov_bloque_abajo;
		var mov_bloque_izq=0;
		var mov_bloque_arriba;

		//Propiedades
		this.posX=posX,
		this.posY=posY,
		this.num_bloque=num_bloque;
		this.posXY_inicio_mov=posXY_inicio_mov;
		this.posXY_fin_mov=posXY_fin_mov;
		this.color=color;
		this.tamano_mapa=tamano_mapa;
		//Funciones de Bloque

		//PONEMOS BLOQUE
		this.PonerBloque = function() {
			document.getElementById(this.posX+","+this.posY).style.backgroundColor=this.color;
		}

		//MOVEMOS BLOQUE IZQ
		this.MoverBloque_izq = function() {

			for(var y=0;y<tamano_mapa;y++){

					for(var x=0;x<tamano_mapa;x++){

							if(document.getElementById(x+","+y)==document.getElementById(this.posXY_inicio_mov) && document.getElementById(x+","+y).style.backgroundColor==this.color){

								mov_bloque_der=setInterval(this.num_bloque+'.MoverBloque_derecha()',velocidad);
								clearInterval(mov_bloque_izq);

							}else{
								if(document.getElementById(x+","+y).style.backgroundColor==this.color){

									document.getElementById(x+","+y).style.backgroundColor="white";

									if((x-1)<0){

									document.getElementById(x+","+y).style.backgroundColor=this.color;

									}else{

										if(document.getElementById((x-1)+","+y).style.backgroundColor=="red"){
											document.getElementById((x-1)+","+y).style.backgroundColor=this.color;
											alert("Un cuadrado enemigo te ha comido, perdistes!");
										}else{
											document.getElementById((x-1)+","+y).style.backgroundColor=this.color;//Se vuelve blanco, eliminado
										}
									}
								}
							}
					}
		   }
		}

		//MOVEMOS BLOQUE ARRIBA
		this.MoverBloque_arriba = function() {

			var tamano_mapa=17;
			for(var y=0;y<tamano_mapa;y++){

					for(var x=0;x<tamano_mapa;x++){
						if(document.getElementById(x+","+y)==document.getElementById("13,7") && document.getElementById(x+","+y).style.backgroundColor=="grey"){


						this.mov_bloque_abajo=setInterval(num_bloque+'.MoverBloque_abajo()',velocidad);
						clearInterval(mov_bloque_arriba);
					}
						if(document.getElementById(x+","+y).style.backgroundColor=="grey"){
							document.getElementById(x+","+y).style.backgroundColor="white";

							if(document.getElementById(x+","+(y-1)).style.backgroundColor=="red"){
								document.getElementById(x+","+(y-1)).style.backgroundColor=this.color;
								alert("Un cuadrado enemigo te ha comido, perdistes!");
							}else{
								document.getElementById(x+","+(y-1)).style.backgroundColor="grey";
							}
						}
					}
		    }

		}

		//MOVEMOS BLOQUE DERECHA
		this.MoverBloque_derecha = function() {

			for(var y=0;y<tamano_mapa;y++){

				for(var x=0;x<tamano_mapa;x++){

					//Aquí es donde da la vuelta el bloque
					if(document.getElementById(x+","+y)==document.getElementById(this.posXY_fin_mov) && document.getElementById(x+","+y).style.backgroundColor==this.color){
						mov_bloque_izq=setInterval(this.num_bloque+'.MoverBloque_izq()',velocidad);
						clearInterval(mov_bloque_der);
					}else{
						if(document.getElementById(x+","+y).style.backgroundColor==this.color){
							document.getElementById(x+","+y).style.backgroundColor="white";

							if((x+2)>tamano_mapa){
								document.getElementById(x+","+y).style.backgroundColor=this.color;
							}else{
								if(document.getElementById((x+1)+","+y).style.backgroundColor=="red"){
									document.getElementById((x+1)+","+y).style.backgroundColor=this.color;
									alert("Un cuadrado enemigo te ha comido, perdistes!");
									var jugador_puntuacion=sessionStorage.getItem('jugador_sesion');
									localStorage.setItem(jugador_puntuacion+'_puntuacion',(puntos_restar+10));
								}else{
									if((x+1)>tamano_mapa){
										document.getElementById(x+","+y)=this.color;
									}else{
										document.getElementById((x+1)+","+y).style.backgroundColor=this.color;
										break;
									}
								}
							}
						}
					}
				}
			}
		}

		//MOVEMOS BLOQUE ABAJO
		this.MoverBloque_abajo = function() {

			var tamano_mapa=16;
			for(var y=tamano_mapa-1;y>=0;y--){

				for(var x=tamano_mapa-1;x>=0;x--){

					if(document.getElementById(x+","+y)==document.getElementById("14,10") && document.getElementById(x+","+y).style.backgroundColor=="grey"){

						mov_bloque_izq=setInterval('bloque1.MoverBloque_izq()',50);
						clearInterval(mov_bloque_abajo);
					}

					if(document.getElementById(x+","+y).style.backgroundColor=="grey"){
						document.getElementById(x+","+y).style.backgroundColor="white";
						document.getElementById(x+","+(y+1)).style.backgroundColor="grey";
					}
				}
			}
		}
	};


//OBJETO BLOQUE ABA ARRIBA
var bloque_abajo_a_arriba = function(posX,posY,num_bloque,posXY_inicio_mov,posXY_fin_mov,velocidad,color,tamano_mapa){

		//Variables
		var mov_bloque_der=0;
		var mov_bloque_abajo=setInterval(num_bloque+'.MoverBloque_abajo()',velocidad);
		var mov_bloque_izq=0;
		var mov_bloque_arriba=0;

		//Propiedades
		this.posX=posX,
		this.posY=posY,
		this.num_bloque=num_bloque;
		this.posXY_inicio_mov=posXY_inicio_mov;
		this.posXY_fin_mov=posXY_fin_mov;
		this.color=color;
		this.tamano_mapa=tamano_mapa;
		//Funciones de Bloque

		//PONEMOS BLOQUE
		this.PonerBloque = function() {
			document.getElementById(this.posX+","+this.posY).style.backgroundColor=this.color;
		}

		//MOVEMOS BLOQUE ABAJO
		this.MoverBloque_abajo = function() {

			for(var y=tamano_mapa-1;y>=0;y--){

				for(var x=tamano_mapa-1;x>=0;x--){

						if(document.getElementById(x+","+y).style.backgroundColor==this.color){

							document.getElementById(x+","+y).style.backgroundColor="white";
								if((y+2)>tamano_mapa){
									document.getElementById(x+","+y).style.backgroundColor=this.color;
								}else{
									document.getElementById(x+","+(y+1)).style.backgroundColor=this.color;
								}
						}
				}
			}
		}
	};

function reiniciar(){
	window.location.reload();//Solo reinicia el tablero
}

//Control de TIEMPO para GANAR O PERDER
var puntos_restar;

function tiempo_juego(tamano_mapa,anchura_x_altura) {

	//Variables iniciales de función
	var cont_gana=0;
	var jugador_puntuacion;
	document.getElementById("segundos_win").innerHTML=segundos_ganar;

	if(segundos_ganar==0){
        puntos_restar=localStorage.getItem("puntos");
		document.getElementById("cant_puntos").innerHTML=puntos_restar;
		puntos_restar=puntos_restar-10;
		localStorage.setItem("puntos",puntos_restar);
		alert("Te has quedado sin tiempo, perdistes!");
		clearInterval(tiempo);

        var jugador_puntuacion=sessionStorage.getItem('jugador_sesion');
        localStorage.setItem(jugador_puntuacion+'_puntuacion',(puntos_restar+10));
	}else{

		if(activa_puntos==true && segundos_ganar<=20){
			puntos_restar=localStorage.getItem("puntos");
			document.getElementById("cant_puntos").innerHTML=puntos_restar;
			puntos_restar=puntos_restar-10;
			localStorage.setItem("puntos",puntos_restar);
		}

		segundos_ganar--;

		if(segundos_ganar>0){

			for(var y=0;y<tamano_mapa;y++){
				for(var x=0;x<tamano_mapa;x++){

					if(document.getElementById(x+","+y).style.backgroundColor=="white" || document.getElementById(x+","+y).style.backgroundColor=="black"){

						cont_gana++;//Suma puntuación si se vuelve un enemigo blanco(eliminado) o negro
					}
				}
			}

			if(cont_gana==anchura_x_altura && segundos_ganar<20){
				puntos_restar=puntos_restar+10;
				alert("¡¡Ganastes "+puntos_restar+" puntos!! ");

				clearInterval(tiempo);
				var jugador_puntuacion=sessionStorage.getItem('jugador_sesion');
				localStorage.setItem(jugador_puntuacion+'_puntuacion',puntos_restar);

				document.forms[0].elements[0].checked=false;
			}
		 }
	}
}

//TECLAS DE DIRRECCIÓN
function pulsar(e,tam) {
	//Variables iniciales de función
	this.tamano_mapa=tam;

    switch (e.keyCode) {

	//IZQUIERDA
    case 37:
		for(var y=0;y<tamano_mapa;y++){

			for(var x=0;x<tamano_mapa;x++){
				if(document.getElementById(x+","+y).style.backgroundColor=="red"){
					document.getElementById(x+","+y).style.backgroundColor="white";

					if((x-1)<0){
					document.getElementById(x+","+y).style.backgroundColor="red";
					}else{
						document.getElementById((x-1)+","+y).style.backgroundColor="red";
					}
				}
			}
		}
		//FIN TECLA IZQUIERDA
    break;

	//ARRIBA
    case 38:
		for(var y=0;y<tamano_mapa;y++){

			for(var x=0;x<tamano_mapa;x++){
				if(document.getElementById(x+","+y).style.backgroundColor=="red"){
					document.getElementById(x+","+y).style.backgroundColor="white";
					if((y-1)<0){
						document.getElementById(x+","+y).style.backgroundColor="red";
					}else{
						document.getElementById(x+","+(y-1)).style.backgroundColor="red";
					}
				}
			}
		}
    //FIN TECLA ARRIBA
    break;

	//DERECHA
    case 39:
		for(var y=0;y<tamano_mapa;y++){

			for(var x=0;x<tamano_mapa;x++){
				if(document.getElementById(x+","+y).style.backgroundColor=="red"){
					document.getElementById(x+","+y).style.backgroundColor="white";
					if((x+2)>tamano_mapa){
						document.getElementById(x+","+y).style.backgroundColor="red";
						break;
					}else{
						document.getElementById((x+1)+","+y).style.backgroundColor="red";
						break;
					}
				}
			}
		}
    //FIN TECLA DERECHA
    break;

	//ABAJO
    case 40:
		for(var y=tamano_mapa-1;y>=0;y--){

			for(var x=tamano_mapa-1;x>=0;x--){
				if(document.getElementById(x+","+y).style.backgroundColor=="red"){
					document.getElementById(x+","+y).style.backgroundColor="white";
					if((y+2)>tamano_mapa){
						document.getElementById(x+","+y).style.backgroundColor="red";
						break;
					}else{
						document.getElementById(x+","+(y+1)).style.backgroundColor="red";
					}
				}
			}
		}
    //FIN TECLA ABAJO
    break;

	//DISPARO [tecla Espacio]
	case 32:


		for(var y=tamano_mapa-1;y>=0;y--){

			for(var x=tamano_mapa-1;x>=0;x--){
				if(document.getElementById(x+","+y).style.backgroundColor=="red"){
					document.getElementById(x+","+(y+1)).style.backgroundColor="black";
				}
			}
		}
    //FIN TECLA DISPARO [Espacio]
    break;
  }
}

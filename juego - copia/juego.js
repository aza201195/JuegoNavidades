function borra_sesion(){
sessionStorage.removeItem('jugador_sesion');
}
//Funcion crea juego
//var segundos_ganar;
var activa_puntos=false;
var vel1;
var vel2;
var vel3;
var vel4;
var segundos_ganar;
var comprobacion_nombre2;
//Declaracion de bloques
var bloque1;
var bloque2;
var bloque3;
var bloque4;
var bloque5;
//Lado x Lado
var multiplicacion;
var anchura_x_altura;
var tiempo;

var jugada=setInterval('empieza_juego()',1000);

//Creacion de OBJETOS Modos de Juego
function empieza_juego(){
if(document.forms[0].elements[0].checked==true){

  var sesion = sessionStorage.getItem('jugador_sesion');
  document.forms[0].elements[0].checked=false;

  document.getElementById("jugador").innerHTML=sesion;
          //Nivel HARD
  segundos_ganar=30;
  tamano_m=24;
  multiplicacion=(tamano_m*tamano_m);
  anchura_x_altura=multiplicacion;
  tiempo=setInterval('tiempo_juego('+tamano_m+','+(anchura_x_altura-1)+')',1000);
  var juego_1= new juego(tamano_m,tamano_m,80,80,60,80,140);
  juego_1.Tipo_mapa();
  activa_puntos=true;
  clearInterval(jugada);//limpia_tablero
}else{

if(document.forms[0].elements[1].checked==true){
    sesion = sessionStorage.getItem('jugador_sesion');
    document.forms[0].elements[0].checked=false;

    document.getElementById("jugador").innerHTML=sesion;
         //Nivel INSANE
    segundos_ganar=30;
    tamano_m=34;
    multiplicacion=(tamano_m*tamano_m);
    anchura_x_altura=multiplicacion;
    tiempo=setInterval('tiempo_juego('+tamano_m+','+(anchura_x_altura-1)+')',1000);
    var juego_1= new juego(tamano_m,tamano_m,60,60,50,60,150);
    juego_1.Tipo_mapa();
    activa_puntos=true;
    clearInterval(jugada);//limpia_tablero

}else{
  if(document.forms[0].elements[2].checked==true){
      sesion = sessionStorage.getItem('jugador_sesion');
      document.forms[0].elements[0].checked=false;

      document.getElementById("jugador").innerHTML=sesion;
                    //Nivel DEMON
      segundos_ganar=30;
      tamano_m=44;
      multiplicacion=(tamano_m*tamano_m);
      anchura_x_altura=multiplicacion;
      tiempo=setInterval('tiempo_juego('+tamano_m+','+(anchura_x_altura-1)+')',1000);
      var juego_1= new juego(tamano_m,tamano_m,70,30,20,30,130);
      juego_1.Tipo_mapa();
      activa_puntos=true;
      clearInterval(jugada);//limpia
  }
}
}
}

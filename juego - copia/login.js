//Funciones JS
//Datos de registro
		function datos_jugador(){
			//Nombre JUGADOR
			var comp_nombre=document.getElementById("login_nombre").value;
			var comp_pass=document.getElementById("login_contraseña").value;
			var no_registrado=0;
			var no_coincide=false;

			var local_comprobar_nombre=localStorage.getItem("nombre");
			var local_comprobar_pass=localStorage.getItem("pass");
			var res_nombre = local_comprobar_nombre.split(",");
			var res_pass = local_comprobar_pass.split(",");
			//validaciones_campos_input
			for(var i=0;i<res_nombre.length;i++){

				if(res_nombre[i]==comp_nombre && res_pass[i]==comp_pass){

					alert("Bienvenido! "+comp_nombre);
					sessionStorage.setItem('jugador_sesion', comp_nombre);
					//document.formulario1.attributes[1].value="Juego.html";

				}else{
					no_registrado++;
					}
			}

			if(comp_nombre=="" || comp_pass==""){
				alert("Debe rellenar los campos para acceder");
				document.formulario1.attributes[1].value="#";
				no_coincide=true;
			}else{
				if(no_registrado==res_nombre.length){
					window.location = "juego.html";//Va a la página del juego
				}
			}
		}

		function muestra_datos(){
			var ventana=window.open('','','height=400,width=400');
			ventana.document.write("<b>INTRUCCIONES:</b><br/><br/>");
			ventana.document.write("1. Debes moverte a través del tablero con las cuatro flechas de dirección para llegar hasta el final.<br/><br/>");
			ventana.document.write("2. No puedes tocar ninguno de los cuadrados enemigos, ya que sino, PERDERÁS :( .<br/><br/>");
			ventana.document.write("3. Para ganar, debes matar a los cuadrados enemigos que te encuentres, será más fácil para ti.<br/><br/>");
			ventana.document.write("4. ¡El tiempo es oro, y aquí más que nunca! Si lo consigues en menos de 10 segundos: PERFECTO; sino se te irá restando una cantidad cada 10 segundos.<br/><br/>");
		}

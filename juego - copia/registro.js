//Funciones JS
//Datos de registro
    function datos_jugador(){
		//Nombre JUGADOR
		var nombre=document.getElementById("nom_jugador").value;
		var correo=document.getElementById("correo_jugador").value;

		//Parámetros_nombre
			if(nombre.length==0 || nombre=="null" || nombre.value=="" || correo.length==0 || correo=="null" || correo.value==""){
				alert("Debes introducir los datos, no deje campos vacíos.");
				document.formulario2.attributes[1].value="#";
			}else{
						if(/[a-z]/.test(nombre)){

							if(localStorage['nombre']!=undefined){
								aux=localStorage.getItem('nombre');
								aux=aux+","+nombre;
								localStorage.setItem('nombre',aux);
							}else{
								aux=nombre;
								localStorage.setItem('nombre',aux);
							}

              //Parámetros_contraseñas
              var pass=document.getElementById("pass_jugador").value;
							var pass2=document.getElementById("pass_jugador2").value;

							if(pass.length==0 || pass=="null" || pass.value==""){
								alert("Debes introducir una contraseña, campo obligatorio.");
								document.formulario2.attributes[1].value="#";

							}else{
								if(pass.length<=6 ){
								alert("Debes introducir una contraseña mayor de 6 caracteres.");
								document.formulario2.attributes[1].value="#";

								}else{
									if(pass!=pass2){
										alert("Las contrseñas no coinciden.");
										document.formulario2.attributes[1].value="#";

									}else{
											if(localStorage['pass']!=undefined){
											aux=localStorage.getItem('pass');
											aux=aux+","+pass;
											localStorage.setItem('pass',aux);
										}else{
											aux=pass;
											localStorage.setItem('pass',aux);
										}

										alert("Ok, datos recibidos.");
										document.formulario2.attributes[1].value="login.html";
									}
								}
							}
						}
			}
		}

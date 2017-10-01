function validar(){
	var nombre, correo, direccion, usuario, contraseña, repetir, telefono, expresion;
	nombre =document.getElementById("nombre").value;
correo =document.getElementById("correo").value;
	direccion =document.getElementById("direccion").value;
	telefono =document.getElementById("telefono").value;
	contraseña =document.getElementById("contraseña").value;
	repetir =document.getElementById("repetir").value;

	if(nombre===""){
		alert("El campo nombre esta vacio");
		return false;
	}


}